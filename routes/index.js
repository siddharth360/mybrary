const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // res.render('index')
  // console.log("hello")

  // // [START bigquery_get_table]
  // // Import the Google Cloud client library
  // const { BigQuery } = require('@google-cloud/bigquery');
  // const options = {
  //   keyFilename: '/home/siddharthchaudhary/Documents/Sunny75-d7098066311b.json',
  //   projectId: 'sunny75-5dee6',
  // };
  // const bigquery = new BigQuery(options);

  // async function getTable() {
  //   // Retrieves table named "my_table" in "my_dataset".

  //   /**
  //    * TODO(developer): Uncomment the following lines before running the sample
  //    */
  //   const datasetId = "analytics_258212991";
  //   const tableId = "events_20210119";

  //   // Retrieve table reference
  //   const dataset = bigquery.dataset(datasetId);
  //   const [table] = await dataset.table(tableId).get();

  //   console.log('Table:');
  //   // console.log(table.metadata.tableReference);
  //   console.log(table);
  // }
  // getTable();
  // // [END bigquery_get_table]

  // // [START bigquery_create_job]
  // // Import the Google Cloud client library and create a client
  // const { BigQuery } = require("@google-cloud/bigquery");
  // const options = {
  //   keyFilename: "/home/siddharthchaudhary/Documents/Sunny75-d7098066311b.json",
  //   projectId: "sunny75-5dee6",
  // };
  // const bigquery = new BigQuery(options);

  // async function createJob() {
  //   // Run a BigQuery query job.

  //   // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/Job
  //   const options = {
  //     // Specify a job configuration to set optional job resource properties.
  //     configuration: {
  //       query: {
  //         query: `SELECT count(DISTINCT(device.vendor_id)) AS user_count FROM \`sunny75-5dee6.analytics_258212991.events_20210119\` LIMIT 1000`,
  //         useLegacySql: false,
  //       },
  //       // labels: { "example-label": "example-value" },
  //     },
  //   };

  //   // Make API request.
  //   const response = await bigquery.createJob(options);
  //   const job = response[0];

  //   // Wait for the query to finish
  //   const [rows] = await job.getQueryResults(job);

  //   // Print the results
  //   console.log("Rows:", rows);
  //   rows.forEach((row) => console.log(row));
  // }
  // // [END bigquery_create_job]
  // createJob();

  const { BigQuery } = require("@google-cloud/bigquery");
  const options = {
    keyFilename: "/home/siddharthchaudhary/Documents/Sunny75-d7098066311b.json",
    projectId: "sunny75-5dee6",
  };
  const bigquery = new BigQuery(options);

  async function listTables() {
    // Lists tables in 'my_dataset'.

    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const datasetId = "analytics_258212991";

    // // List all tables in the dataset
    // const [tables] = await bigquery.dataset(datasetId).getTables();

    // console.log("Tables:");
    // tables.forEach(async (table1) => {
    //   console.log(table1.id);

    //   const srcDatasetId = "analytics_258212991";
    //   // const srcTableId = "events_20210119";
    //   const srcTableId = table1.id;
    //   const destDatasetId = "sunny75_dataset";
    //   const destTableId = "sunny75_table";

    //   // Copy the table contents into another table
    //   const [job] = await bigquery
    //     .dataset(srcDatasetId)
    //     .table(srcTableId)
    //     .copy(bigquery.dataset(destDatasetId).table(destTableId));

    //   console.log(`Job ${job.id} completed.`);

    //   // Check the job's status for errors
    //   const errors = job.status.errors;
    //   if (errors && errors.length > 0) {
    //     throw errors;
    //   }
    // });

    const datasetId = "analytics_258212991";
    const dataset = bigquery.dataset(datasetId);

    dataset.getModels().then((data) => {
      const models = data[0];
      console.log("Models:", models);
      models.forEach((model) => console.log(model.metadata));
    });
  }
  // [END bigquery_list_tables]
  listTables();
});

module.exports = router;
