const district = [];

const platformStatement = {
    taxes: '',
    jobs: '',
    infrastructure: '',
    healthCare: '',
    crimeAndEnforcement:''
}

const urlForDonation = [];

const calendarOfEvents = [];

const volunteerInformation = {
    name: '',
    address: '',
    email: '',
    phoneNumber: '',
    availability: '',
    activities: []
};

const biography = []; 

const imageGallery = {
    headShot: '',
    picOfFamily: '',
    picOfConstituents: ''
}

const missionStatement = [];

const urlForRegisteringToVote = [];

// Write functions below here

function districtFun (place) {
    district.push(place)
    console.log('Her congressional district is ' + district)
};

function platformStatementFun (taxes, jobs, infrastructure, healthCare, crimeAndEnforcement){
    platformStatement.taxes = taxes;
    platformStatement.jobs = jobs;
    platformStatement.infrastructure = infrastructure;
    platformStatement.healthCare = healthCare;
    platformStatement.crimeAndEnforcement = crimeAndEnforcement;
    console.log(platformStatement)
};

function urlForDonationFun (url) {
    urlForDonation.push(url);
    console.log('Use this URL for donations: ' + urlForDonation)
};

function calendarOfEventsFun (date) {
    calendarOfEvents.push(date);
    console.log('This is the date for the event: ' + calendarOfEvents);
};

function volunteerInformationFun(name, address, email, phoneNumber, availability,activities){
    volunteerInformation.name = name;
    volunteerInformation.address = address;
    volunteerInformation.email = email;
    volunteerInformation.phoneNumber = phoneNumber;
    volunteerInformation.availability = availability;
    volunteerInformation.activities = activities;
    console.log(volunteerInformation);
};

function biographyFun (story) {
    biography.push(story);
    console.log(biography);
};

function imageGalleryFun (headShot, picOfFamily, picOfConstituents){
    imageGallery.headShot = headShot;
    imageGallery.picOfFamily = picOfFamily;
    imageGallery.picOfConstituents = picOfConstituents;
    console.log (imageGallery);
};

function missionStatementFun (statement){
    missionStatement.push(statement);
    console.log(missionStatement);
}

function urlForRegisteringToVoteFun (url){
    urlForRegisteringToVote.push(url);
    console.log ('Use this link to vote: ' + urlForRegisteringToVote);
};



districtFun('tn');
platformStatementFun('99', 'mcdonals', 'industry', 'bad', 10);
urlForDonationFun('donation.com');
calendarOfEventsFun('2-1-20')
volunteerInformationFun('sus', '11 be drive', '3@2.com', '222-222-2222', 'not', 'frisbee'); 
biographyFun('I have nothing to say');
imageGalleryFun ('img1', 'img2', 'img3');
missionStatementFun('I formally state my mission');
urlForRegisteringToVoteFun('votehere.com');
