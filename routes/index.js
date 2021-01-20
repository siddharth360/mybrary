const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  // res.render('index')
  // console.log("hello")

  // // Import the Google Cloud client library and create a client
  // const { BigQuery } = require('@google-cloud/bigquery');
  // const options = {
  //   keyFilename: '/home/siddharthchaudhary/Documents/Sunny75-d7098066311b.json',
  //   projectId: 'sunny75-5dee6',
  // };
  // const bigquery = new BigQuery(options);

  // async function createDataset() {
  //   // Creates a new dataset named "my_dataset".

  //   /**
  //    * TODO(developer): Uncomment the following lines before running the sample.
  //    */
  //   const datasetId = "analytics_258212991";

  //   // Specify the geographic location where the dataset should reside
  //   const options = {
  //     location: 'US',
  //   };

  //   // Create a new dataset
  //   const [dataset] = await bigquery.createDataset(datasetId, options);
  //   console.log(`Dataset ${dataset.id} created.`);
  // }
  // createDataset();


  // [START bigquery_get_table]
  // Import the Google Cloud client library
  const { BigQuery } = require('@google-cloud/bigquery');
  const options = {
    keyFilename: '/home/siddharthchaudhary/Documents/Sunny75-d7098066311b.json',
    projectId: 'sunny75-5dee6',
  };
  const bigquery = new BigQuery(options);

  async function getTable() {
    // Retrieves table named "my_table" in "my_dataset".

    /**
     * TODO(developer): Uncomment the following lines before running the sample
     */
    const datasetId = "analytics_258212991";
    const tableId = "events_20210119";

    // Retrieve table reference
    const dataset = bigquery.dataset(datasetId);
    const [table] = await dataset.table(tableId).get();

    console.log('Table:');
    // console.log(table.metadata.tableReference);
    console.log(table);
  }
  getTable();
  // [END bigquery_get_table]

})

module.exports = router