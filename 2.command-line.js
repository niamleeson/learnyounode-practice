if (process.argv.length > 2) {
    const arr = process.argv.slice(2);
    const sum = arr.reduce((prev, curr) => prev + Number(curr), 0);
    console.log(sum);
}
