export const DR_SAMPLE_CVR = `<?xml version="1.0" encoding="UTF-8"?>
<CastVoteRecordReport xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://itl.nist.gov/ns/voting/1500-103/v1 ../../../../../CastVoteRecords/NIST_V0_cast_vote_records.xsd"
    xmlns="http://itl.nist.gov/ns/voting/1500-103/v1">
    <CVR>
        <BallotStyleId>???</BallotStyleId>
        <CurrentSnapshotId>cvr-001</CurrentSnapshotId>
        <CVRSnapshot ObjectId="cvr-001">
          <CVRContest>
            <ContestId>1</ContestId>
            <CVRContestSelection>
              <ContestSelectionId>option1</ContestSelectionId>
              <SelectionPosition>
                <HasIndication>yes</HasIndication>
                <IsAllocable>yes</IsAllocable>
                <NumberVotes>1</NumberVotes>
              </SelectionPosition>
              <TotalNumberVotes>1</TotalNumberVotes>
            </CVRContestSelection>
          </CVRContest>
          <CVRContest>
            <ContestId>2</ContestId>
            <CVRContestSelection>
              <ContestSelectionId>optiona</ContestSelectionId>
              <SelectionPosition>
                <HasIndication>yes</HasIndication>
                <IsAllocable>yes</IsAllocable>
                <NumberVotes>1</NumberVotes>
              </SelectionPosition>
              <TotalNumberVotes>1</TotalNumberVotes>
            </CVRContestSelection>
          </CVRContest>
          <Type>original</Type>
        </CVRSnapshot>
        <ElectionId>1</ElectionId>
        <UniqueId>1</UniqueId>
    </CVR>
      
    <Election ObjectId="gadget-county-2021-06">
        <Candidate ObjectId="contest-mayor-candidate-cosmo-spacely">
            <Code>
                <Type>local-level</Type>
                <Value>candidate-cosmo-spacely-id</Value>
            </Code>
            <Name>Cosmo Spacely</Name>
        </Candidate>
        <Candidate ObjectId="contest-mayor-candidate-spencer-cogswell">
            <Code>
                <Type>local-level</Type>
                <Value>candidate-spencer-cogswell-id</Value>
            </Code>
            <Name>Spencer Cogswell</Name>
        </Candidate>
        
        <Candidate ObjectId="contest-control-board-spaceport-candidate-jane-jetson">
            <Code>
                <Type>local-level</Type>
                <Value>candidate-jane-jetson-id</Value>
            </Code>
            <Name>Jane Jetson</Name>
        </Candidate>
        <Candidate ObjectId="contest-control-board-spaceport-candidate-harlan-ellis">
            <Code>
                <Type>local-level</Type>
                <Value>candidate-harlan-ellis-id</Value>
            </Code>
            <Name>Harlan Ellis</Name>
        </Candidate>
        <Candidate ObjectId="contest-control-board-spaceport-candidate-rudi-indexer">
            <Code>
                <Type>local-level</Type>
                <Value>candidate-rudi-indexer-id</Value>
            </Code>
            <Name>Rudi Indexer</Name>
        </Candidate>

        <Code>
            <Type>local-level</Type>
            <Value>port-precinct</Value>
        </Code>
        
        <Contest xsi:type="CandidateContest" ObjectId="contest-mayor-orbit-city">
            <ContestSelection xsi:type="CandidateSelection" ObjectId="contest-mayor-selection-cosmo-spacely">
                <CandidateIds>contest-mayor-candidate-cosmo-spacely</CandidateIds>
            </ContestSelection>
            <ContestSelection xsi:type="CandidateSelection" ObjectId="contest-mayor-selection-spencer-cogswell">
                <CandidateIds>contest-mayor-candidate-spencer-cogswell</CandidateIds>
            </ContestSelection>
            <ContestSelection xsi:type="CandidateSelection" ObjectId="contest-mayor-selection-writein">
                <IsWriteIn>true</IsWriteIn>
            </ContestSelection>
        </Contest>

        <Contest xsi:type="CandidateContest" ObjectId="contest-control-board-spaceport">
            <ContestSelection xsi:type="CandidateSelection"
                ObjectId="contest-control-board-selection-jane-jetson">
                <CandidateIds> contest-control-board-spaceport-candidate-jane-jetson</CandidateIds>
            </ContestSelection>
            <ContestSelection xsi:type="CandidateSelection"
                ObjectId="contest-control-board-selection-harlan-ellis">
                <CandidateIds>contest-control-board-spaceport-candidate-harlan-ellis</CandidateIds>
            </ContestSelection>
            <ContestSelection xsi:type="CandidateSelection"
                ObjectId="contest-control-board-selection-rudi-indexer">
                <CandidateIds>contest-control-board-spaceport-candidate-rudi-indexer</CandidateIds>
            </ContestSelection>
            <ContestSelection xsi:type="CandidateSelection"
                ObjectId="contest-control-board-selection-writein">
                <IsWriteIn>true</IsWriteIn>
            </ContestSelection>
        </Contest>

        <Contest ObjectId="contest-ballot-measure-gadget-county-1" xsi:type="BallotMeasureContest">
            <Code>
                <Type>local-level</Type>
                <Value>contest-gadget-county-ballot-measure-1</Value>
            </Code>
            <ContestSelection xsi:type="BallotMeasureSelection" ObjectId="contest_selection_yes">
                <Code>
                    <Type>local-level</Type>
                    <Value>yes</Value>
                </Code>
                <Selection>yes</Selection>
            </ContestSelection>
            <ContestSelection xsi:type="BallotMeasureSelection" ObjectId="contest_selection_no">
                <Code>
                    <Type>local-level</Type>
                    <Value>no</Value>
                </Code>
                <Selection>no</Selection>
            </ContestSelection>
        </Contest>

        <ElectionScopeId>downtown-precinct</ElectionScopeId>
    </Election>

    <GeneratedDate>2021-06-01T12:00:00-08:00</GeneratedDate>
    <GpUnit ObjectId="downtown-precinct">
        <Name>downtown precinct</Name>
        <Type>precinct</Type>
    </GpUnit>
    <ReportGeneratingDeviceIds>_RD1</ReportGeneratingDeviceIds>
    <ReportingDevice ObjectId="_RD1">
        <Application>Trust the Vote application</Application>
    </ReportingDevice>
    <Version>1.0.0</Version>
</CastVoteRecordReport>

`;
