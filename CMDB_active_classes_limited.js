(function() {
  // Create a GlideRecord object for the 'cmdb_ci' table.
  var ciRecord = new GlideRecord('cmdb_ci');

  // Create an object to store the unique classes.
  var uniqueClasses = {};
 // Add an encoded query to filter CIs where sys_class_name contains 'ANYTHING'.
 ciRecord.addEncodedQuery('sys_class_nameANYTHING');
  // Query all CI records.
  ciRecord.query();
  // Limit the query to the first 10 records.
  ciRecord.setLimit(1000);
  // Iterate through the CI records and collect unique classes.
  var count = 0;
  while (ciRecord.next() && count < 1000) {
    var ciClass = ciRecord.getValue('sys_class_name');
    // Use the class as a key in the uniqueClasses object to ensure uniqueness.
    uniqueClasses[ciClass] = true;
    count++;
  }

  // Print the unique classes.
  var classesList = Object.keys(uniqueClasses);
  gs.info('Unique CI Classes: ' + classesList.join(', '));
})();
