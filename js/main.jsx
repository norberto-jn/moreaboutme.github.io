const { useState } = React

const renderImageCards = (imageNames) => {
    const cards = []

    for (const imageName of imageNames) {
        cards.push(
            <div className="col-12 col-md-4 mt-3" key={imageName}>
                <div className="card">
                    <img src={`./img/${imageName}`} className="card-img" alt={imageName} />
                </div>
            </div>
        )
    }

    return cards
}

const renderPdfCardWithModal = (height) => {
    const [showModal, setShowModal] = useState(false)

    const handleOpenModal = () => setShowModal(true)
    const handleCloseModal = () => setShowModal(false)

    return (
        <div>
            {/* Card clicável com a miniatura do PDF */}
            <div className="card" onClick={handleOpenModal} style={{ cursor: "pointer", padding: "10px", textAlign: 'center' }}>
                <img src="./img/carta.png" alt="PDF Thumbnail" style={{ width: "20rem", height }} />
                <span>Clique para visualizar o PDF</span>
            </div>

            {/* Modal para visualização do PDF */}
            <div className={`modal ${showModal ? "show" : ""}`} style={{ display: showModal ? "block" : "none", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                <div className="modal-dialog modal-lg" style={{ maxWidth: "90%", margin: "auto" }}>
                    <div className="modal-content">
                        <div className="modal-header">                         
                            <h5 className="modal-title">Visualização do PDF</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseModal}></button>
                        </div>
                        <div className="modal-body">
                            <iframe
                                src="./pdfs/carta.pdf"
                                width="100%"
                                height="800px"
                                style={{ border: "none" }}
                            />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                                Fechar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <div className="row">
                {renderImageCards(["mg1.jpeg", "mg2.jpeg", "mg5.jpeg"])}
            </div>

            <div className="row">
                {renderImageCards(["mg4.jpeg", "mg3.jpeg"])}
                <div className="col-12 col-md-4 mt-3" >
                    {renderPdfCardWithModal('690px')}
                </div>
            </div>

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))