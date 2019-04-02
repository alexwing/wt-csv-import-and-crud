window.UpdateProductComponent = React.createClass({
    // initial component states will be here
    getInitialState: function() {
    // Get this population fields from the data attributes we set on the
    // #content div, using jQuery
    return {
        populations: [],
        id: 0,
        name: '',
        Hombre: '',
        Mujer: '',
        Total: '',
        successUpdate: null
    };
},
 
// on mount, fetch all categories and one population data to stored them as this component's state
componentDidMount: function(){
 
    // read categories
    this.serverRequestCat = $.get("http://localhost:3000/api/population/all",
        function (populations) {
            this.setState({
                populations: populations.Population,
            });
        }.bind(this));
 
    // read one population data
    var populationId = this.props.populationId;
    this.serverRequestProd = $.get("http://localhost:3000/api/population/" + populationId,
        function (population) {
            this.setState({id: population.Population.id});
            this.setState({Edad: population.Population.Edad});
            this.setState({Hombre: population.Population.Hombre});
            this.setState({Mujer: population.Population.Mujer});
            this.setState({Total: population.Population.Total});
        }.bind(this));
 
    $('.page-header h1').text('Update population');
},
 
// on unmount, kill categories fetching in case the request is still pending
componentWillUnmount: function() {
    this.serverRequestCat.abort();
    this.serverRequestProd.abort();
},
 
// handle form field changes here
// handle category change
onHombreChange: function(e) {
    this.setState({Hombre: e.target.value});
},
 
// handle name change
onEdadChange: function(e) {
    this.setState({Edad: e.target.value});
},
 
// handle description change
onMujerChange: function(e) {
    this.setState({Mujer: e.target.value});
},
 
// handle price change
onTotalChange: function(e) {
    this.setState({Total: e.target.value});
},

 
// handle save changes button here
onSave: function(e){
 

    this.state.Hombre = isNaN( parseFloat(this.state.Hombre))? 0 :parseFloat(this.state.Hombre)
    this.state.Mujer = isNaN( parseFloat(this.state.Mujer))? 0 :parseFloat(this.state.Mujer)
    this.state.Total = isNaN( parseFloat(this.state.Total))? 0 :parseFloat(this.state.Total)


    // data in the form 
    //no necesary in GET metod
    /*var form_data={
        Edad: this.state.Edad,
        Hombre: this.state.Hombre,
        Mujer: this.state.Mujer,
        Total: this.state.Total
    };*/
 var populationId = this.props.populationId;
    // submit form data to api
    $.ajax({
        url: "http://localhost:3000/api/population/edit/"+populationId+"/"+this.state.Edad+"/"+this.state.Hombre+"/"+this.state.Mujer+"/"+this.state.Total,
        type : "GET",
        contentType : 'application/json',
       // data : JSON.stringify(form_data),
        success : function(response) {
 
            // api message
            this.setState({successCreation: response['message']});
 
            // empty form
            this.setState({Edad: ""});
            this.setState({Hombre: ""});
            this.setState({Mujer: ""});
            this.setState({Total:""});
 
        }.bind(this),
        error: function(xhr, resp, text){
            // show error to console
            console.log(xhr, resp, text);
        }
    });
 
    e.preventDefault();
},
render: function() {
 
    // make categories as option for the select tag.
 
    return (
    <div>
        {
 
            this.state.successCreation == 1 ?
                <div className='alert alert-success'>
                    Population updated.
                </div>
            : null
        }
 
        {
 
            this.state.successCreation == 0 ?
                <div className='alert alert-danger'>
                    Population updated ERROR.
                </div>
            : null
        }
 
        <a href='#'
            onClick={() => this.props.changeAppMode('read')}
            className='btn btn-primary margin-bottom-1em'> Read Products
        </a>
 
 
        <form onSubmit={this.onSave}>
            <table className='table table-bordered table-hover'>
            <tbody>
                <tr>
                    <td>Edad</td>
                    <td>
                        <input
                        type='text'
                        className='form-control'
                        value={this.state.Edad}
                        required
                        onChange={this.onEdadChange} />
                    </td>
                </tr>
 
                <tr>
                    <td>Hombre</td>
                    <td>
                        <textarea
                        type='text'
                        className='form-control'
                        required
                        value={this.state.Hombre}
                        onChange={this.onHombreChange}>
                        </textarea>
                    </td>
                </tr>
 
                <tr>
                    <td>Mujer</td>
                    <td>
                        <input
                        type='text'
                        className='form-control'
                        value={this.state.Mujer}
                        required
                        onChange={this.onMujerChange}/>
                    </td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>
                        <input
                        type='text'
                        className='form-control'
                        value={this.state.Total}
                        required
                        onChange={this.onTotalChange}/>
                    </td>
                </tr>

 
                <tr>
                    <td></td>
                    <td>
                        <button
                        className='btn btn-primary'
                        onClick={this.onSave}>Update</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </form>
    </div>
    );
}
});