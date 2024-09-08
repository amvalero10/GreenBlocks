projectExists(_projectId) 
        onlyProjectOwner(_projectId) 
    { 
        require( 
            projects[_projectId].balances.currentBalance >= _value, 
            "Insufficient funding" 
        ); 
 
        (bool success, ) = projects[_projectId].owner.call{value: _value}(""); 
        require(success, "Failed Transaction"); 
 
        projects[_projectId].balances.currentBalance -= _value; 
 
        emit FundsWithdrawn(_projectId, msg.sender, _value); 
    } 
 
    function reportProject(uint256 _projectId, string memory _report) 
        public 
        projectExists(_projectId) 
    { 
        projects[_projectId].reports.push( 
            Report({reporter: msg.sender, report: _report, verified: false}) 
        ); 
 
        emit ReportCreated(_projectId, msg.sender, _report); 
    } 
 
    function verifyReport(uint256 _projectId, uint256 _reportIndex) 
        public 
        projectExists(_projectId) 
        reportExists(_projectId, _reportIndex) 
        onlyOwner 
    { 
        Report storage report = projects[_projectId].reports[_reportIndex]; 
        report.verified = true; 
        projects[_projectId].verifiedReports.push(report); 
 
        uint256 stakeToCollect = projects[_projectId].balances.stake; 
        projects[_projectId].balances.stake = 0; 
        projects[_projectId].disableFunding = true; 
 
        (bool successOwnerStakeCollection, ) = owner.call{ 
            value: stakeToCollect / 2 
        }(""); 
        require( 
            successOwnerStakeCollection, 
            "Failed Owner Stake Collection Transaction" 
        ); 
 
        (bool successReporterStakeCollection, ) = report.reporter.call{ 
            value: stakeToCollect / 2 
        }(""); 
        require( 
            successReporterStakeCollection, 
            "Failed Reporter Stake Collection Transaction" 
        ); 
 
        emit ReportVerified(_projectId, report.reporter, report.report); 
    } 
 
    function getProjectBalances(uint256 _projectId) 
        public 
        view 
        projectExists(_projectId) 
        returns (uint256) 
    { 
        return projects[_projectId].balances.currentBalance; 
    } 
 
    function getProjects() public view returns (Project[] memory) { 
        Project] memory projectsList = new Project[; 
 
        for (uint256 i = 0; i < projectCount; i++) { 
            projectsList[i] = projects[i]; 
        } 
 
        return projectsList; 
    } 
 
    function getProjectReports(uint256 _projectId) 
        public 
        view 
        projectExists(_projectId) 
        returns (Report[] memory) 
    { 
        return projects[_projectId].reports; 
    } 
 
    function getVerifiedProjectReports(uint256 _projectId) 
        public 
        view 
        projectExists(_projectId) 
        returns (Report[] memory) 
    { 
        return projects[_projectId].verifiedReports; 
    } 
}