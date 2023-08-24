using { sap.ui.recruitment as my } from '../db/schema';


service RecruitmentService {

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



}
