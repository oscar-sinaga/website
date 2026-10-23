// Redirect cached legacy exam pages to the new AWS Mock Exams folder.
if (location.pathname.includes("/website/dea-c01-mock-exam/")) {
  location.replace("/website/aws-mock-exams/dea-c01-mock-exam/");
}
