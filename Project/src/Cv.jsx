const myCv = new URL('./assets/CV_Korhonen_Ilkka.pdf', import.meta.url).href

const onClick = () => {

    fetch(myCv).then((response) => {
        response.blob().then((blob) => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.type = "application/pdf";
            alink.media = "print";
            alink.download = "CV_Korhonen_Ilkka.pdf";
            alink.click();
        });
    });
};

const Cv = () => (<main id="home">
    <h1 className="lg-heading">Curriculum Vitae of <span className="text-secondary">Ilkka</span> Korhonen</h1>
    <p><button onClick={onClick}>Download here</button></p>

</main>

)

export default Cv