window.ReadProductsComponent = React.createClass({
    getInitialState: function() {
        return {
            populations: []
        };
    },
componentDidMount: function(){
	this.serverRequest = $.get("http://localhost:3000/api/population/all", function(data){
        console.log(data.Population);
       // alert("populations:"+ JSON.stringify(data));
		this.setState  ({populations : data.Population});
	}.bind(this));
},
componentWillUnmount: function() {
        this.serverRequest.abort();
    },
     render: function() {
        // list of populations
        var filteredProducts = this.state.populations;
        console.log(filteredProducts);
        $('.page-header h1').text('Read Products');
 
        return (
            <div className='overflow-hidden'>
                <TopActionsComponent changeAppMode={this.props.changeAppMode} />
 
                <ProductsTable
                    populations={filteredProducts}
                    changeAppMode={this.props.changeAppMode} />
            </div>
        );
    }
});