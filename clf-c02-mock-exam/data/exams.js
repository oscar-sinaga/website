// Redirect cached legacy exam pages to the new AWS Mock Exams folder.
if (location.pathname.includes("/website/clf-c02-mock-exam/")) {
  location.replace("/website/aws-mock-exams/clf-c02-mock-exam/");
}
