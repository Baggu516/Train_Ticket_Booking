const Data={
    rows:[
        { id: 1, trainName: 'Snow', source: 'vayalpadu', destination: "madanapalle",sourcetime:"8:30 am" ,endingtime:"6:30 pm",price:140,date:"12/3/23"},
        { id: 2, trainName: 'Bingo', source: 'Jon', destination: "vayalpaduz",sourcetime:"1:30 am" ,endingtime:"1:30 pm",price:260,date:"15/3/23"},
        { id: 3, trainName: 'Venkatadhri', source: 'Rajam', destination: "madanapalle",sourcetime:"7:30 am" ,endingtime:"5:30 pm",price:240 ,date:"20/3/23"},
        { id: 4, trainName: 'Namkya', source: 'anathapuram', destination: "angallu",sourcetime:"11:30 am" ,endingtime:"1:30 pm",price:540,date:"27/3/23" },
        { id: 5, trainName: 'sapthagiri', source: 'kalikiri', destination: "xyz",sourcetime:"10:30 am" ,endingtime:"4:30 pm",price:240,date:"15/3/23"},
        { id: 6, trainName: 'kachi', source: 'renigunta', destination: "chittor",sourcetime:"9:30 am" ,endingtime:"1:30 pm",price:240,date:"15/3/23"  },
        { id: 8, trainName: 'Holywood', source: 'Jon', destination: "hlo" ,sourcetime:"7:30 am" ,endingtime:"1:30 pm",price:840,date:"15/3/23" },
        { id: 9, trainName: 'Tollywood', source: 'Jon', destination: "xyz",sourcetime:"10:30 am" ,endingtime:"1:30 pm",price:40 ,date:"15/3/23" },
        { id: 10, trainName: 'Malayam', source: 'Jon', destination: "xyz",sourcetime:"11:30 am" ,endingtime:"1:30 pm",price:440 ,date:"15/3/23" },
      
      ],
    columns: [
        { field: 'id', headerName: 'S.NO', width: 70 },
        { field: 'trainName', headerName: 'Train name', width: 130 },
        { field: 'date', headerName: 'Date', width: 130 },
        { field: 'source', headerName: 'Source', width: 130 },
        {
          field: 'destination',
          headerName: 'Destination',
          // type: 'number',
           width: 120,
        },
        { field: 'sourcetime', headerName: 'StartTime', width: 150 },
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