export let searchDataTable = (evnt: any, table: any ) => {

    console.log(table)

    table.columns( 'Username' ).search( evnt.currentTarget.value ).draw();

}

export let dateFormat = (dateString: string | number | Date) => {

    let date = new Date(dateString);

    return date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();

}