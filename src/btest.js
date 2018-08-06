import React from 'react';


class NewForm extends React.Component {
    constructor(){
        super();
        this.handleEntry = this.handleEntry.bind()
        this.state={
            form:{
                companyNameForAdmin: '',
                websiteDataForAdmin: '',
                CompanySummaryForAdmin: '',
                companyNeedNumOne: '',
                companyNeedNumTwo: '',
                companyYoutubeLink: '',
                companyNeedsandServices: '',
                companyPhoneNumber: '',
                companyEmailForAdmin: '',
                companyImageForAdmin: ''
            }
        }
        
    }
    handleCompanyNameForAdmin= (event) => {
        this.setState({
            form: {
                ...this.state.form, 
                companyNameForAdmin: event.target.value
            }
        })
        console.log(this.state.form)
    }

    handleWebsiteDataForAdmin= (event) => {
        this.setState({
            form: {
                ...this.state.form, 
                WebsiteDataForAdmin: event.target.value
            }
        })
        console.log(this.state.form)
    }
    handleCompanySummaryForAdmin= (event) => {
        this.setState({
            form: {
                ...this.state.form, 
                companySummaryForAdmin: event.target.value
            }
        })
        console.log(this.state.form)
    }
    handleCompanyNeedNumOne= (event) => {
        this.setState({
            form: {
                ...this.state.form, 
                companyNeedNumOne: event.target.value
            }
        })
        console.log(this.state.form)
    }
    handleCompanyNeedNumTwo= (event) => {
        this.setState({
            form: {
                ...this.state.form, 
                companyNeedNumTwo: event.target.value
            }
        })
        console.log(this.state.form)
    }
    handleCompanyNeedNumThree= (event) => {
        this.setState({
            form: {
                ...this.state.form, 
                companyNeedNumThree: event.target.value
            }
        })
        console.log(this.state.form)
    }
    handleCompanyYoutubeLink= (event) => {
        this.setState({
            form: {
                ...this.state.form, 
                companyYoutubeLink: event.target.value
            }
        })
        console.log(this.state.form)
    }
    
    handleCompanyNeedsAndServices =(event) => {
        this.setState({
            form: {
                ...this.state.form, 
                companyNeedsandServices: event.target.value
            }
        })
        console.log(this.state.form)
    }
    handleCompanyPhoneNumber =(event) => {
        this.setState({
            form: {
                ...this.state.form, 
                companyPhoneNumber: event.target.value
            }
        })
        console.log(this.state.form)
    }
    handleCompanyEmailForAdmin =(event) => {
        this.setState({
            form: {
                ...this.state.form, 
                companyEmailForAdmin: event.target.value
            }
        })
        console.log(this.state.form)
    }
    handleCompanyImageForAdmin =(event) => {
        this.setState({
            form: {
                ...this.state.form, 
                companyImageForAdmin: event.target.value
            }
        })
        console.log(this.state.form)
    }

    handleEntry(event){
        event.preventDefault();
        const form = event.target.value;
        const data = new FormData(event.target);


       fetch('/form-submit', {
           method: 'POST',
           body: data,
       });
    }

    render() {
        return (
            <form onSubmit={this.handleEntry}>
                <button>Add</button><button>Edit</button><button>Delete</button>

                <label htmlFor='Company Name'>Company</label>
                <input value={this.state.form.companyNameForAdmin} type='text'
                onChange={this.handleCompanyNameForAdmin}/>


                <label htmlFor='Website Data'>Enter Company Website</label>
                <input value={this.state.form.WebsiteDataForAdmin} type='url'
                onChange={this.handleWebsiteDataForAdmin}/>

                <label htmlFor='summary of company'>Company Summary</label>
                <input value={this.state.form.companySummaryForAdmin} type='text'
                onChange={this.handleCompanySummaryForAdmin}/>

                <label htmlFor='Company Needs 1'>Need 1</label>
                <input value={this.state.form.companyNeedNumOne} type='text'
                onChange={this.handleCompanyNeedNumOne}/>
                
                <label htmlFor='Company Needs 2'>Need 2</label>
                <input value={this.state.form.companyNeedNumTwo} type='text'
                onChange={this.handleCompanyNeedNumTwo}/>
                
                <label htmlFor='Company Needs 3'>Need 3</label>
                <input value={this.state.form.companyNeedNumThree} type='text'
                onChange={this.handleCompanyNeedNumThree}/>
                
                <label htmlFor='Youtube Video'>Youtube Link</label>
                <input value={this.state.form.companyYoutubeLink} type='url'
                onChange={this.handleCompanyYoutubeLink}/>
                
                <label htmlFor='Companies Products and Services'>Products and Services</label>
                <input value={this.state.form.companyNeedsandServices} type='text'
                onChange={this.handleCompanyNeedsAndServices} />

                <label htmlFor='Company Phone Number'>Company Phone Number</label>
                <input value={this.state.form.companyPhoneNumber} type='tel'
                onChange={this.handleCompanyPhoneNumber}/>

                <label htmlFor='Company Email'>Compamy Email</label>
                <input value={this.state.form.companyEmailForAdmin} type='email'
                onChange={this.handleCompanyEmailForAdmin}/>
                
                <label htmlFor=''>Company Image</label>
                <input value={this.state.form.companyImageForAdmin}type='file' name='poi-thumbnail'
                       accept='.png, .jpg, .jpeg, .gif'
                       encType='multipart/form-data' 
                onChange={this.handleCompanyImageForAdmin}/>
                
               


                <button>Save Company</button><button>Edit Company</button><button>Delete Company</button>
            </form>
        );
}
}

export default NewForm;