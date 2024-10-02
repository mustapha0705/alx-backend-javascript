export default function createIteratorObject(report) {
    const allEmployees = report.allEmployees;
  
    function* employeeIterator() {
      for (const department in allEmployees) {
        if (Object.prototype.hasOwnProperty.call(allEmployees, department)) {
          for (const employee of allEmployees[department]) {
            yield employee;
          }
        }
      }
    }
  
    return employeeIterator();
  }
  