const ProducerOrgSearchForm = () => (
    <div className="text-center">
      <form className="row g-3 pb-3">
        <div className="col-sm-5">
          <div className="form-group row">
            <div className="col-sm-3 text-end">
              <label
                className="col-form-label"
                htmlFor="formSearchProducerOrgSearchBy"
              >
                Search By
              </label>
            </div>
            <div className="col-sm-9">
              <select id="formSearchProducerOrgSearchBy" className="form-control">
                <option>Name</option>
                <option>Registration No</option>
                <option>Mobile No</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-sm-5">
          <input
            type="text"
            className="form-control"
            id="searchTerm"
            placeholder="Enter search text"
          />
        </div>
        <div className="form-group col-sm-2 text-start">
          <button type="button" className="btn btn-primary mx-2">
            Go
          </button>
          <button type="button" className="btn btn-primary ml-2">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
  
  export default ProducerOrgSearchForm;
  