const downloadButton = document.getElementById('download-button');

downloadButton.addEventListener('click', () => {
    const fileUrl = 'Geometry Dash.exe'; // URL файла для скачивания
    const fileName = 'Geometry Dash.exe'; // Имя файла для скачивания

    window.open(fileUrl, '_blank', `filename=${fileName}`);
});
