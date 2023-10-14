const roleFunc = (value:string): string => {
  switch (value) {
    case "Frontend":
      return "Engineer" 
    case "Backend":
      return "Engineer"
    case "Fullstack":
      return "Engineer"
    case "Data Science":
      return "Engineer"
    case "UI/UX":
      return "Designer"
    case "DevOps":
      return "Engineer"
    case "Cloud":
      return "Engineer"
    case "QA":
      return "Engineer"
    case "Cyber Security":
      return "Engineer"
    case "Data Analytics":
      return "Engineer"
    case "AI/ML":
      return "Engineer"
    default:
      return "Software Engineer"
  }
}

export default roleFunc