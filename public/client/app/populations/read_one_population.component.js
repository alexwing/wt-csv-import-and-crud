window.ReadOneProductComponent = React.createClass({
    getInitialState: function() {
    // Get this population fields from the data attributes we set on the
    // #content div, using jQuery
    return {
    	populations : [],
        id: 0,
        Edad: '',
        Hombre: '',
        Mujer: '',
        Total: ''
    };
},
 
// on mount, read population data and them as this component's state
componentDidMount: function(){
 
    var populationId = this.props.populationId;
 
    this.serverRequestProd = $.get("http://localhost:3000/api/population/" + populationId,
        function (population) {
        	this.setState({populations: population.Population});
            this.setState({Hombre: population.Population.Hombre});
            this.setState({id: population.Population._id});
            this.setState({Edad: population.Population.Edad});
            this.setState({Mujer: population.Population.Mujer});
            this.setState({Total: population.Population.Total});
        }.bind(this));
 
    $('.page-header h1').text('Kembali');
},
 
// on unmount, kill categories fetching in case the request is still pending
componentWillUnmount: function() {
    this.serverRequestProd.abort();
},
 
// render component html will be here
render: function() {
 
    return (
        <div>
            <a href='#'
                onClick={() => this.props.changeAppMode('read')}
                className='btn btn-primary margin-bottom-1em'>
                Read Products
            </a>
 
            <form onSubmit={this.onSave}>
                <table className='table table-bordered table-hover'>
                    <tbody>
                    <tr>
                        <td>Edad</td>
                        <td>{this.state.Edad}</td>
                    </tr>
 
                    <tr>
                        <td>Hombre</td>
                        <td>{this.state.Hombre}</td>
                    </tr>
 
                    <tr>
                        <td>Mujer</td>
                        <td>{this.state.Mujer}</td>
                    </tr>
 
                    <tr>
                        <td>Total</td>
                        <td>{this.state.Total}</td>
                    </tr>
 
                    </tbody>
                </table>
            </form>
        </div>
    );
}
});