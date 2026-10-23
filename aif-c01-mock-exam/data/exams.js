// Redirect cached legacy exam pages to the new AWS Mock Exams folder.
if (location.pathname.includes("/website/aif-c01-mock-exam/")) {
  location.replace("/website/aws-mock-exams/aif-c01-mock-exam/");
}
