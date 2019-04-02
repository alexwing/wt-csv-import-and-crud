window.ProductsTable = React.createClass({
    render: function() {
 
    var rows = this.props.populations
        .map(function(population, i) {
            return (
                <ProductRow
                    key={i}
                    population={population}
                    changeAppMode={this.props.changeAppMode} />
            );
        }.bind(this));
 
        return(
            !rows.length
                ? <div className='alert alert-danger'>No populations found.</div>
                :
                <table className='table table-bordered table-hover'>
                    <thead>
                        <tr>
                            <th className="text-center">Edad</th>
                            <th className="text-right">Hombre</th>
                            <th className="text-right">Mujer</th>
                            <th className="text-right">Total</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
        );
    }
});