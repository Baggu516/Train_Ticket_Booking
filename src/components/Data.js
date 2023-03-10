const Data={
    rows:[
        { id: 1, trainName: 'Snow', source: 'Jon', destination: "xyz",sourcetime:"11:30 am" ,endingtime:"1:30 pm",price:240},
        { id: 2, trainName: 'Bingo', source: 'Jon', destination: "xyz",sourcetime:"11:30 am" ,endingtime:"1:30 pm",price:240},
        { id: 3, trainName: 'Venkatadhri', source: 'Jon', destination: "xyz",sourcetime:"11:30 am" ,endingtime:"1:30 pm",price:240 },
        { id: 4, trainName: 'Namkya', source: 'Jon', destination: "xyz",sourcetime:"11:30 am" ,endingtime:"1:30 pm",price:240 },
        { id: 5, trainName: 'sapthagiri', source: 'Jon', destination: "xyz",sourcetime:"11:30 am" ,endingtime:"1:30 pm",price:240},
        { id: 6, trainName: 'kachi', source: 'Jon', destination: "xyz",sourcetime:"11:30 am" ,endingtime:"1:30 pm",price:240  },
        { id: 7, trainName: 'Marvel', source: 'Jon', destination: "xyz",sourcetime:"11:30 am" ,endingtime:"1:30 pm",price:240  },
        { id: 8, trainName: 'Holywood', source: 'Jon', destination: "xyz" ,sourcetime:"11:30 am" ,endingtime:"1:30 pm",price:240 },
        { id: 9, trainName: 'Tollywood', source: 'Jon', destination: "xyz",sourcetime:"11:30 am" ,endingtime:"1:30 pm",price:240  },
        { id: 10, trainName: 'Malayam', source: 'Jon', destination: "xyz",sourcetime:"11:30 am" ,endingtime:"1:30 pm",price:240  },
      
      ],
    columns: [
        { field: 'id', headerName: 'S.NO', width: 70 },
        { field: 'trainName', headerName: 'Train name', width: 130 },
        { field: 'source', headerName: 'Source', width: 130 },
        {
          field: 'destination',
          headerName: 'Destination',
          // type: 'number',
          // width: 90,
        },
        { field: 'sourcetime', headerName: 'StartTime', width: 120 },
        { field: 'endingtime', headerName: 'StopTime', width: 120 },
        { field: 'price', headerName: 'Ticket Price',type:"number",width:120 },
        // { field: 'book', headerName: 'Click on Book for booking',type:"number",width:200 },
      //   {
      //     field: 'fullName',
      //     headerName: 'Full name',
      //     description: 'This column has a value getter and is not sortable.',
      //     sortable: false,
      //     width: 160,
      //     valueGetter: (params) =>
      //       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
      //   },
      ],
}

export default Data;