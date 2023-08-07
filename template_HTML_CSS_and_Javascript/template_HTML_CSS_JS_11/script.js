const uploadImage = document.getElementById('mypicture');
const preview = document.querySelector('.preview');

function checkFile(check, file) {

    // Read the contents of the file and convert it to the URL data format
    const reader = new FileReader();

    reader.onload = (e) => {

        // Convert from binary (101010) to BASE64
        check.src = e.target.result;
        console.log(e.target.result);

        // When uploading a new photo, delete the previously uploaded image
        preview.innerHTML = '';
        preview.appendChild(check);

    }
    reader.readAsDataURL(file);

}

uploadImage.addEventListener('change', (e) => {

    const file = uploadImage.files[0];

    // Rules
    // Only accept image files with JPEG extension
    if (!file) return;

    // if (!file.name.endsWith('.jpg')) {
    //     alert('Image must be in .jpg format');
    //     return;
    // }

    // Only upload photos with the size we give
    // Convert MB to KB
    // if (file.size / (1024 * 1024) > 5) {
    //     alert('Only upload images that are less than 5MB in size');
    //     return;
    // }

    console.log(file);
    
    if (file.type.startsWith('image/')) {

        const img = document.createElement('img');
        checkFile(img, file);

    } else if (file.type === 'video/mp4') {

        const video = document.createElement('video');
        checkFile(video, file);
        video.autoplay = true;

    } else {

        alert('Not an image or video file')
        return;

    }

});