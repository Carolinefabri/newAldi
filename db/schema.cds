namespace sap.ui.recruitment;


entity JobPositions {
  key ID : Integer;
  title : String;
  description : String;
  department : String;
  requirements : String;
  isOpen : Boolean default true;
}

entity Application {
  key ID: Integer;
  jobPositionID: Integer;
  firstName: String;
  lastName: String;
  fullName: String;
  email: String;
  resume: Binary; // You can adjust the data type accordingly
  status: String;
  hardSkills: String(255);
  softSkills: String(255);
}

entity SkillsNeeded {
  key ID: Integer;
  careerGoalID: Integer; // ID of the associated career goal
  skill: String(100);
  description: String(255);
}

entity DevelopmentCourses {
  key ID: Integer;
  careerGoalID: Integer; // ID of the associated career goal
  courseName: String(150);
  courseType: String(50); // Online, Workshop, Internal, Certification
  courseDescription: String(255);
}

entity Candidate {
  key ID: Integer;
  fullName: String;
  email: String;
  jobInterest: String;
  hardSkills: String;
  softSkills: String;
}

entity CareerGoal {
  key ID: Integer;
  title: String;
  description: String;
  skillsRequired: Association to many SkillsNeeded on $self.ID = skillsRequired.careerGoalID;
  developmentCourses: Association to many DevelopmentCourses on $self.ID = developmentCourses.careerGoalID;
}
