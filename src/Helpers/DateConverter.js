const convertDate = (date) => {
    let d = new Date(date * 1000);
    return (
      d.toDateString().slice(4, d.toDateString().length) +
      " " +
      d.toLocaleTimeString()
    );
}

export {
    convertDate
}