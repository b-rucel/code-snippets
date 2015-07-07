var stdin = "";

process.stdin.on('data', function(chunk) {
    stdin += chunk
});

process.stdin.on('end', function() {
    process.stdout.write(JSON.stringify(eval(stdin)))
});