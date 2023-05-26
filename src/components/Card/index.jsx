import"./Card.css"
export const Card = () => {
    return (
        <div class="col-md-4 mb-4">
            <div class={`card border-left-primary shadow h-100 py-`}>
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div className={`text-xs font-weight-bold text-primary text-uppercase mb-1`}>Movies in Data Base</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">21</div>
                        </div>
                        <div class="col-auto">
                            <i className={`fas fa-film fa-2x text-gray-300`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}