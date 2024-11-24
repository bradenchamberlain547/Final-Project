document.getElementById("toggle").addEventListener('click', function() {
    document.body.classList.toggle('dark');
});

let tippin = ['Web Design', "Web Devel", "Seo Optim"];
for (let i=0; i < tippin.length; i++) {
    console.log(tippin[i]);
};

document.head.insertAdjacentHTML('beforeend', `
    <style>
        .dark {
            background-color: gray;
            color: white;
        }
        .dark header {
            background-color: #333;
        }
        .dark button {
            background-color: #555;
        }
    </style>
`);