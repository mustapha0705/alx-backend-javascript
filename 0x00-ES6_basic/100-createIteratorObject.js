export default function createIteratorObject(report) {
  const { allEmployees } = report;

  function* employeeIterator() {
    for (const department in allEmployees) {
      if (allEmployees.hasOwnProperty(department)) { // Ensure it's the object's own property
        for (const employee of allEmployees[department]) {
          yield employee;
        }
      }
    }
  }

  return employeeIterator();
}
