export default function task2(value) {
    return !!(value.includes('<html>') && value.includes('</html>') && value.includes('<head>') && value.includes('</head>') && value.includes('<body>') && value.includes('</body>'))
}
