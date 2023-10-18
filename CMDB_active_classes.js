(function() {
    // Create a GlideRecord object for the 'cmdb_ci' table.
    var ciRecord = new GlideRecord('cmdb_ci');
  
    // Create an object to store the unique classes.
    var uniqueClasses = {};
   // Add an encoded query to filter CIs where sys_class_name contains 'ANYTHING'.
   ciRecord.addEncodedQuery('sys_class_nameANYTHING');
    // Query all CI records.
   ciRecord.query();
    while (ciRecord.next()) {
      var ciClass = ciRecord.getValue('sys_class_name');
      // Use the class as a key in the uniqueClasses object to ensure uniqueness.
      uniqueClasses[ciClass] = true;
    }
  
    // Print the unique classes.
    var classesList = Object.keys(uniqueClasses);
    gs.info('Unique CI Classes: ' + classesList.join(', '));
  })();
