import React from 'react'
import { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { AiFillCamera } from 'react-icons/ai';
import './EditPage.css'
import { useNavigate } from 'react-router-dom';

const EditPage = () => {
    const navigate=useNavigate();
    const location = useLocation();
    const propertydetail = location.state && location.state.propertydetail;
    const _id = propertydetail && propertydetail._id;
    console.log(propertydetail); // Log the propertydetail to the console
    const [formData, setFormData] = useState({
        propertyType: '',
        price: '',
        propertyAge: '',
        propertyDiscription: '',
        negotiable: '',
        ownership: '',
        propertyApproved: '',
        bankLoan: '',
        length: '',
        breadth: '',
        totalArea: '',
        areaUnit: '',
        noOfBHK: '',
        noOfFloor: '',
        attached: '',
        westernToilet: '',
        furnished: '',
        carParking: '',
        lift: '',
        electricity: '',
        facing: '',
        name: '',
        mobile: '',
        postedBy: '',
        saleType: '',
        featuredPackage: '',
        PPDPackage: '',
        image: '',
        email: '',
        city: '',
        area: '',
        pincode: '',
        address: '',
        landmark: '',
        latitude: '',
        longitude: ''
    });

    console.log(formData)

    useState(() => {
        if (propertydetail) {
          setFormData({
            propertyType: propertydetail.propertyType || '',
            price: propertydetail.price || '',
            propertyAge: propertydetail.propertyAge || '',
            // ... update other form fields similarly
            propertyDiscription:propertydetail.propertyDiscription ||'',
        negotiable: propertydetail.negotiable||'',
        ownership: propertydetail.ownership||'',
        propertyApproved: propertydetail.propertyApproved||'',
        bankLoan: propertydetail.bankLoan||'',
        length: propertydetail.length||'',
        breadth: propertydetail.breadth||'',
        totalArea: propertydetail.totalArea||'',
        areaUnit: propertydetail.areaUnit||'',
        noOfBHK: propertydetail.noOfBHK||'',
        noOfFloor: propertydetail.noOfFloor||'',
        attached: propertydetail.attached||'',
        westernToilet: propertydetail.westernToilet||'',
        furnished: propertydetail.furnished||'',
        carParking: propertydetail.carParking||'',
        lift: propertydetail.lift||'',
        electricity: propertydetail.electricity||'',
        facing: propertydetail.facing||'',
        name: propertydetail.name||'',
        mobile: propertydetail.mobile||'',
        postedBy: propertydetail.postedBy||'',
        saleType: propertydetail.saleType||'',
        featuredPackage: propertydetail.featuredPackage||'',
        PPDPackage: propertydetail.PPDPackage||'',
        image: propertydetail.image||'',
        email: propertydetail.email||'',
        city: propertydetail.city||'',
        area: propertydetail.area||'',
        pincode: propertydetail.pincode||'',
        address: propertydetail.address||'',
        landmark: propertydetail.landmark||'',
        latitude: propertydetail.latitude||'',
        longitude: propertydetail.longitude||''
          });
        }
      }, [propertydetail]);


    const handleFormData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(previousData => {
            return {...previousData, [name]: value}
        });
    }

    const handlePhoto = (e) => {
        const name = e.target.name;
        const value = e.target.files[0];
        setFormData(previousData => {
            return {...previousData, [name]:value}
        })
}

const EditSend = (formData) => {
    axios
      .put(`http://localhost:5000/edit/${_id}`, formData)
      .then((response) => {
        console.log(response.data);
        navigate('/home'); // Navigate after the PUT request is completed
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary form validation or data processing
    EditSend(formData);
  };

  return (
    <form className='form-container'>
    <div>
       <label className='input-box' htmlFor='propertyType'> Property Type <br />
                <select id='propertyType' name='propertyType' onChange={(e) => handleFormData(e)} className='selection-input'>
                    {formData.propertyType === "" ? <option value='Select Property Type'>Select Property Type</option> :
                        <option value={formData.propertyType}>{formData.propertyType}</option>}
                    <option value='Residential'>Residential</option>
                    <option value='Commercial'>Commercial</option>
                    <option value='Industrial'>Industrial</option>
                    <option value='Investing'>Investing</option>
                </select>
            </label><br />

            <label className='input-box' htmlFor='price'>Price <br />
                <input type='text' id='price' name='price' placeholder='Example: 100000'
                    onChange={(e) => handleFormData(e)} class='input' value={'' || formData.price} />
            </label><br />

            <label className='input-box' htmlFor='propertyAge'>Property Age <br />
                <select id='propertyAge' name='propertyAge' onChange={(e) => handleFormData(e)} className='selection-input'>
                    {formData.propertyAge === "" ? <option value='Select Property Age'>Select Property Age</option> :
                        <option value={formData.propertyAge}>{formData.propertyAge}</option>}
                    <option value='0-5'>0-5</option>
                    <option value='5-10'>5-10</option>
                    <option value='10-15'>10-15</option>
                    <option value='More Than 15 Years'>More Than 15 Years</option>
                </select>
            </label><br />

            <label className='input-box' htmlFor='propertyDiscription'>Property Discription <br />
                <input type='text' id='propertyDiscription' name='propertyDiscription'
                    onChange={(e) => handleFormData(e)} className='input' value={"" || formData.propertyDiscription} />
            </label><br />

            <label className='input-box' htmlFor='negotiable'>Negotiable <br />
                <select id='negotiable' name='negotiable' onChange={(e) => handleFormData(e)} className='selection-input'>
                    {formData.negotiable === "" ? <option value='Select Negotiable'>Select Negotiable</option> :
                        <option value={formData.negotiable}>{formData.negotiable}</option>}
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>
            </label><br />

            <label className='input-box' htmlFor='ownership'>Ownership <br />
                <select id='ownership' name='ownership' onChange={(e) => handleFormData(e)} className='selection-input'>
                    {formData.ownership === "" ? <option value='Select Ownership'>Select Ownership</option> :
                        <option value={formData.ownership}>{formData.ownership}</option>}
                    <option value='Individual Ownership'>Individual Ownership</option>
                    <option value='Joint Ownership'>Joint Ownership</option>
                    <option value='Ownership By Way Of Nomination'>Ownership By Way Of Nomination</option>
                </select>
            </label><br />

            <label className='input-box' htmlFor='propertyApproved'>Property Approved <br />
                <select id='propertyApproved' name='propertyApproved' onChange={(e) => handleFormData(e)} className='selection-input'>
                    {formData.propertyApproved === "" ? <option value='Property Approved'>Property Approved</option> :
                        <option value={formData.propertyApproved}>{formData.propertyApproved}</option>}
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>
            </label><br />

            <label className='input-box' htmlFor='bankLoan'>Bank Loan <br />
                <select id='bankLoan' name='bankLoan' onChange={(e) => handleFormData(e)} className='selection-input'>
                    {formData.bankLoan === "" ? <option value='Bank Loan'>Bank Loan</option> :
                        <option value={formData.bankLoan}>{formData.bankLoan}</option>}
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>
            </label><br />
            <label className='input-box' htmlFor='length'> Length <br/>
                <input type='text' id='length' name='length' placeholder='Example: 1000' 
                onChange={(e) => {handleFormData(e)}} class='input' value={'' || formData.length} />
            </label><br/>

            <label className='input-box' htmlFor='breadth'> Breadth <br/>
                <input type='text' id='breadth' name='breadth' placeholder='Example: 1000' 
                onChange={(e) => {handleFormData(e)}} class='input' value={'' || formData.breadth}/>
            </label><br/>

            <label className='input-box' htmlFor='totalArea'>Total Area <br/>
                <input type='text' id='totalArea' name='totalArea' placeholder='Example: 7500' 
                onChange={(e) => {handleFormData(e)}} class='input' value={'' || formData.totalArea}/>
            </label><br/>

            <label className='input-box' htmlFor='areaUnit'>Area Unit <br/>
                <input type='text' id='areaUnit' name='areaUnit' placeholder='Area Unit' 
                onChange={(e) => {handleFormData(e)}} class='input' value={'' || formData.areaUnit}/>
            </label><br/>
            
            <label className='input-box' htmlFor='noOfBHK'>No Of BHK <br/>
                <select id='noOfBHK' name='noOfBHK' onChange={(e) => handleFormData(e)} class='selection-input'>
                    {formData.noOfBHK === "" ? <option value='Select No Of BHK'>Select No Of BHK</option> : 
                    <option value={formData.noOfBHK}>{formData.noOfBHK}</option>}
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='More Than 3'>More Than 3</option>
                </select>
            </label><br/>

            <label className='input-box' htmlFor='noOfFloor'>No Of Floor <br/>
                <select id='noOfFloor' name='noOfFloor' onChange={(e) => handleFormData(e)} class='selection-input'>
                    {formData.noOfFloor === "" ? <option value='Select No Of Floor'>Select No Of Floor</option> : 
                    <option value={formData.noOfFloor}>{formData.noOfFloor}</option>}
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='More Than 3'>More Than 3</option>
                </select>
            </label><br/>

            <label className='input-box' htmlFor='attached'>Attached <br/>
                <select id='attached' name='attached' onChange={(e) => handleFormData(e)} class='selection-input'>
                    {formData.attached === "" ? <option value='Select Attached'>Select Attached</option> : 
                    <option value={formData.attached}>{formData.attached}</option>}
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>
            </label><br/>

            <label className='input-box' htmlFor='westernToilet'>Western Toilet <br/>
                <select id='westernToilet' name='westernToilet' onChange={(e) => handleFormData(e)} class='selection-input'>
                    {formData.westernToilet === "" ? <option value='Select Western Toilet'>Select Western Toilet</option> : 
                    <option value={formData.westernToilet}>{formData.westernToilet}</option>}
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>
            </label><br/>

            <label className='input-box' htmlFor='furnished'>Furnished <br/>
                <select id='furnished' name='furnished' onChange={(e) => handleFormData(e)} class='selection-input'>
                    {formData.furnished === "" ? <option value='Select Furnished'>Select Furnished</option> : 
                    <option value={formData.furnished}>{formData.furnished}</option>}
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>
            </label><br/>

            <label className='input-box' htmlFor='carParking'>Car Parking <br/>
                <select id='carParking' name='carParking' onChange={(e) => handleFormData(e)} class='selection-input'>
                    {formData.carParking === "" ? <option value='Select Car Parking'>Select Car Parking</option> : 
                    <option value={formData.carParking}>{formData.carParking}</option>}
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>
            </label><br/>

            <label className='input-box' htmlFor='lift'>Lift <br/>
                <select id='lift' name='lift' onChange={(e) => handleFormData(e)} class='selection-input'>
                    {formData.lift === "" ? <option value='Select Lift'>Select Lift</option> : 
                    <option value={formData.lift}>{formData.lift}</option>}
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>
            </label><br/>

            <label className='input-box' htmlFor='electricity'>Electricity <br/>
                <input type='text' id='electricity' name='electricity' placeholder='Example: 3 Phase' 
                onChange={(e) => {handleFormData(e)}} class='input' value={'' || formData.electricity}/>
            </label><br/>
            <label className='input-box' htmlFor='name'>Name <br/>
                <input type='text' id='name' name='name' placeholder='Owner' 
                onChange={(e) => {handleFormData(e)}} className='input' value={"" || formData.name}/>
            </label><br/>

            <label className='input-box' htmlFor='mobile'>Mobile <br/>
                <input type='number' id='mobile' name='mobile' placeholder='Enter Mobile Number' 
                onChange={(e) => {handleFormData(e)}} className='input' value={"" || formData.mobile}/>
            </label><br/>

            <label className='input-box' htmlFor='postedBy'>Posted By <br/>
                <select id='postedBy' name='postedBy' onChange={(e) => handleFormData(e)} className='selection-input'>
                    {formData.postedBy === "" ? <option value='Posted By'>Posted By</option> : 
                    <option value={formData.postedBy}>{formData.postedBy}</option>}
                    <option value='Owner'>Owner</option>
                    <option value='Dealer'>Dealer</option>
                    <option value='Relative'>Relative</option>
                    <option value='Other'>Other</option>
                </select>
            </label><br/>

            <label className='input-box' htmlFor='saleType'>Sale Type <br/>
                <select id='saleType' name='saleType' onChange={(e) => handleFormData(e)} className='selection-input'>
                    {formData.saleType === "" ? <option value='Please Select'>Please Select</option> : 
                    <option value={formData.saleType}>{formData.saleType}</option>}
                    <option value='Standard Sales'>Standard Sales</option>
                    <option value='Bank Owned Sales'>Bank Owned Sales</option>
                    <option value='Short Sales'>Short Sales</option>
                </select>
            </label><br/>

            <label className='input-box' htmlFor='featuredPackage'>Featured Package <br/>
                <select id='featuredPackage' name='featuredPackage' onChange={(e) => handleFormData(e)} className='selection-input'>
                    {formData.featuredPackage === "" ? <option value='Please Select'>Please Select</option> : 
                    <option value={formData.featuredPackage}>{formData.featuredPackage}</option>}
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>
            </label><br/>

            <label className='input-box' htmlFor='PPDPackage'>PPD Package <br/>
                <select id='PPDPackage' name='PPDPackage' onChange={(e) => handleFormData(e)} className='selection-input'>
                    {formData.PPDPackage === "" ? <option value='Please Select'>Please Select</option> : 
                    <option value={formData.PPDPackage}>{formData.PPDPackage}</option>}
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>
            </label><br/>

            <label className='photo-input' htmlFor='photo-input'><AiFillCamera className='camera-icon'/>Add Photo<br/>
                <input type='file'
                    id='photo-input'
                    name='image'
                    onChange={e => handlePhoto(e)}
                    // className='photo-input'
                    // value={"" || formData.mobile}
                />
            </label>
            <label className='input-box' htmlFor='facing'>Facing <br/>
                <select id='facing' name='facing' onChange={(e) => handleFormData(e)} class='selection-input'>
                    {formData.facing === "" ? <option value='Select Facing'>Select Facing</option> : 
                    <option value={formData.facing}>{formData.facing}</option>}
                    <option value='North'>North</option>
                    <option value='South'>South</option>
                    <option value='East'>East</option>
                    <option value='West'>West</option>
                </select>
            </label><br/>
            <label className='input-box' htmlFor='email'>Email <br />
                    <input type='text' id='email' name='email' placeholder='Email' onChange={(e) => { handleFormData(e) }} class='input' value={"" || formData.email} />
                </label><br />

                <label className='input-box' htmlFor='city'>City <br />
                    <select id="city" name="city" onChange={(e) => { handleFormData(e) }} className='selection-input'>
                        {formData.city === "" ? <option value="Select City">Select City</option> :
                            <option value={formData.city}>{formData.city}</option>}
                        <option value="Adilabad">Adilabad</option> <option value="Agra">Agra</option> <option value="Ahmedabad">Ahmedabad</option> <option value="Ahmednagar">Ahmednagar</option> <option value="Aizawl">Aizawl</option> <option value="Ajitgarh(Mohali)">Ajitgarh (Mohali)</option> <option value="Ajmer">Ajmer</option> <option value="Akola">Akola</option> <option value="Alappuzha">Alappuzha</option> <option value="Aligarh">Aligarh</option> <option value="Alirajpur">Alirajpur</option> <option value="Allahabad">Allahabad</option> <option value="Almora">Almora</option> <option value="Alwar">Alwar</option> <option value="Ambala">Ambala</option> <option value="AmbedkarNagar">Ambedkar Nagar</option> <option value="Amravati">Amravati</option> <option value="Amrelidistrict">Amreli district</option> <option value="Amritsar">Amritsar</option> <option value="Anand">Anand</option> <option value="Anantapur">Anantapur</option> <option value="Anantnag">Anantnag</option> <option value="Angul">Angul</option> <option value="Anjaw">Anjaw</option> <option value="Anuppur">Anuppur</option> <option value="Araria">Araria</option> <option value="Ariyalur">Ariyalur</option> <option value="Arwal">Arwal</option> <option value="AshokNagar">Ashok Nagar</option> <option value="Auraiya">Auraiya</option> <option value="Aurangabad">Aurangabad</option> <option value="Aurangabad">Aurangabad</option> <option value="Azamgarh">Azamgarh</option> <option value="Badgam">Badgam</option> <option value="Bagalkot">Bagalkot</option> <option value="Bageshwar">Bageshwar</option> <option value="Bagpat">Bagpat</option> <option value="Bahraich">Bahraich</option> <option value="Baksa">Baksa</option> <option value="Balaghat">Balaghat</option> <option value="Balangir">Balangir</option> <option value="Balasore">Balasore</option> <option value="Ballia">Ballia</option> <option value="Balrampur">Balrampur</option> <option value="Banaskantha">Banaskantha</option> <option value="Banda">Banda</option> <option value="Bandipora">Bandipora</option> <option value="BangaloreRural">Bangalore Rural</option> <option value="BangaloreUrban">Bangalore Urban</option> <option value="Banka">Banka</option> <option value="Bankura">Bankura</option> <option value="Banswara">Banswara</option> <option value="Barabanki">Barabanki</option> <option value="Baramulla">Baramulla</option> <option value="Baran">Baran</option> <option value="Bardhaman">Bardhaman</option> <option value="Bareilly">Bareilly</option> <option value="Bargarh(Baragarh)">Bargarh (Baragarh)</option> <option value="Barmer">Barmer</option> <option value="Barnala">Barnala</option> <option value="Barpeta">Barpeta</option> <option value="Barwani">Barwani</option> <option value="Bastar">Bastar</option> <option value="Basti">Basti</option> <option value="Bathinda">Bathinda</option> <option value="Beed">Beed</option> <option value="Begusarai">Begusarai</option> <option value="Belgaum">Belgaum</option> <option value="Bellary">Bellary</option> <option value="Betul">Betul</option> <option value="Bhadrak">Bhadrak</option> <option value="Bhagalpur">Bhagalpur</option> <option value="Bhandara">Bhandara</option> <option value="Bharatpur">Bharatpur</option> <option value="Bharuch">Bharuch</option> <option value="Bhavnagar">Bhavnagar</option> <option value="Bhilwara">Bhilwara</option> <option value="Bhind">Bhind</option> <option value="Bhiwani">Bhiwani</option> <option value="Bhojpur">Bhojpur</option> <option value="Bhopal">Bhopal</option> <option value="Bidar">Bidar</option> <option value="Bijapur">Bijapur</option> <option value="Bijapur">Bijapur</option> <option value="Bijnor">Bijnor</option> <option value="Bikaner">Bikaner</option> <option value="Bilaspur">Bilaspur</option> <option value="Bilaspur">Bilaspur</option> <option value="Birbhum">Birbhum</option> <option value="Bishnupur">Bishnupur</option> <option value="Bokaro">Bokaro</option> <option value="Bongaigaon">Bongaigaon</option> <option value="Boudh(Bauda)">Boudh (Bauda)</option> <option value="Budaun">Budaun</option> <option value="Bulandshahr">Bulandshahr</option> <option value="Buldhana">Buldhana</option> <option value="Bundi">Bundi</option> <option value="Burhanpur">Burhanpur</option> <option value="Buxar">Buxar</option> <option value="Cachar">Cachar</option> <option value="CentralDelhi">Central Delhi</option> <option value="Chamarajnagar">Chamarajnagar</option> <option value="Chamba">Chamba</option> <option value="Chamoli">Chamoli</option> <option value="Champawat">Champawat</option> <option value="Champhai">Champhai</option> <option value="Chandauli">Chandauli</option> <option value="Chandel">Chandel</option> <option value="Chandigarh">Chandigarh</option> <option value="Chandrapur">Chandrapur</option> <option value="Changlang">Changlang</option> <option value="Chatra">Chatra</option> <option value="Chennai">Chennai</option> <option value="Chhatarpur">Chhatarpur</option> <option value="ChhatrapatiShahujiMaharajNagar"> Chhatrapati Shahuji Maharaj Nagar </option> <option value="Chhindwara">Chhindwara</option> <option value="Chikkaballapur">Chikkaballapur</option> <option value="Chikkamagaluru">Chikkamagaluru</option> <option value="Chirang">Chirang</option> <option value="Chitradurga">Chitradurga</option> <option value="Chitrakoot">Chitrakoot</option> <option value="Chittoor">Chittoor</option> <option value="Chittorgarh">Chittorgarh</option> <option value="Churachandpur">Churachandpur</option> <option value="Churu">Churu</option> <option value="Coimbatore">Coimbatore</option> <option value="CoochBehar">Cooch Behar</option> <option value="Cuddalore">Cuddalore</option> <option value="Cuttack">Cuttack</option> <option value="DadraandNagarHaveli"> Dadra and Nagar Haveli </option> <option value="Dahod">Dahod</option> <option value="DakshinDinajpur">Dakshin Dinajpur</option> <option value="DakshinaKannada">Dakshina Kannada</option> <option value="Daman">Daman</option> <option value="Damoh">Damoh</option> <option value="Dantewada">Dantewada</option> <option value="Darbhanga">Darbhanga</option> <option value="Darjeeling">Darjeeling</option> <option value="Darrang">Darrang</option> <option value="Datia">Datia</option> <option value="Dausa">Dausa</option> <option value="Davanagere">Davanagere</option> <option value="Debagarh(Deogarh)">Debagarh (Deogarh)</option> <option value="Dehradun">Dehradun</option> <option value="Deoghar">Deoghar</option> <option value="Deoria">Deoria</option> <option value="Dewas">Dewas</option> <option value="Dhalai">Dhalai</option> <option value="Dhamtari">Dhamtari</option> <option value="Dhanbad">Dhanbad</option> <option value="Dhar">Dhar</option> <option value="Dharmapuri">Dharmapuri</option> <option value="Dharwad">Dharwad</option> <option value="Dhemaji">Dhemaji</option> <option value="Dhenkanal">Dhenkanal</option> <option value="Dholpur">Dholpur</option> <option value="Dhubri">Dhubri</option> <option value="Dhule">Dhule</option> <option value="DibangValley">Dibang Valley</option> <option value="Dibrugarh">Dibrugarh</option> <option value="DimaHasao">Dima Hasao</option> <option value="Dimapur">Dimapur</option> <option value="Dindigul">Dindigul</option> <option value="Dindori">Dindori</option> <option value="Diu">Diu</option> <option value="Doda">Doda</option> <option value="Dumka">Dumka</option> <option value="Dungapur">Dungapur</option> <option value="Durg">Durg</option> <option value="EastChamparan">East Champaran</option> <option value="EastDelhi">East Delhi</option> <option value="EastGaroHills">East Garo Hills</option> <option value="EastKhasiHills">East Khasi Hills</option> <option value="EastSiang">East Siang</option> <option value="EastSikkim">East Sikkim</option> <option value="EastSinghbhum">East Singhbhum</option> <option value="Eluru">Eluru</option> <option value="Ernakulam">Ernakulam</option> <option value="Erode">Erode</option> <option value="Etah">Etah</option> <option value="Etawah">Etawah</option> <option value="Faizabad">Faizabad</option> <option value="Faridabad">Faridabad</option> <option value="Faridkot">Faridkot</option> <option value="Farrukhabad">Farrukhabad</option> <option value="Fatehabad">Fatehabad</option> <option value="FatehgarhSahib">Fatehgarh Sahib</option> <option value="Fatehpur">Fatehpur</option> <option value="Fazilka">Fazilka</option> <option value="Firozabad">Firozabad</option> <option value="Firozpur">Firozpur</option> <option value="Gadag">Gadag</option> <option value="Gadchiroli">Gadchiroli</option> <option value="Gajapati">Gajapati</option> <option value="Ganderbal">Ganderbal</option> <option value="Gandhinagar">Gandhinagar</option> <option value="Ganganagar">Ganganagar</option> <option value="Ganjam">Ganjam</option> <option value="Garhwa">Garhwa</option> <option value="GautamBuddhNagar">Gautam Buddh Nagar</option> <option value="Gaya">Gaya</option> <option value="Ghaziabad">Ghaziabad</option> <option value="Ghazipur">Ghazipur</option> <option value="Giridih">Giridih</option> <option value="Goalpara">Goalpara</option> <option value="Godda">Godda</option> <option value="Golaghat">Golaghat</option> <option value="Gonda">Gonda</option> <option value="Gondia">Gondia</option> <option value="Gopalganj">Gopalganj</option> <option value="Gorakhpur">Gorakhpur</option> <option value="Gulbarga">Gulbarga</option> <option value="Gumla">Gumla</option> <option value="Guna">Guna</option> <option value="Guntur">Guntur</option> <option value="Gurdaspur">Gurdaspur</option> <option value="Gurgaon">Gurgaon</option> <option value="Gwalior">Gwalior</option> <option value="Hailakandi">Hailakandi</option> <option value="Hamirpur">Hamirpur</option> <option value="Hamirpur">Hamirpur</option> <option value="Hanumangarh">Hanumangarh</option> <option value="Harda">Harda</option> <option value="Hardoi">Hardoi</option> <option value="Haridwar">Haridwar</option> <option value="Hassan">Hassan</option> <option value="Haveridistrict">Haveri district</option> <option value="Hazaribag">Hazaribag</option> <option value="Hingoli">Hingoli</option> <option value="Hissar">Hissar</option> <option value="Hooghly">Hooghly</option> <option value="Hoshangabad">Hoshangabad</option> <option value="Hoshiarpur">Hoshiarpur</option> <option value="Howrah">Howrah</option> <option value="Hyderabad">Hyderabad</option> <option value="Hyderabad">Hyderabad</option> <option value="Idukki">Idukki</option> <option value="ImphalEast">Imphal East</option> <option value="ImphalWest">Imphal West</option> <option value="Indore">Indore</option> <option value="Jabalpur">Jabalpur</option> <option value="Jagatsinghpur">Jagatsinghpur</option> <option value="JaintiaHills">Jaintia Hills</option> <option value="Jaipur">Jaipur</option> <option value="Jaisalmer">Jaisalmer</option> <option value="Jajpur">Jajpur</option> <option value="Jalandhar">Jalandhar</option> <option value="Jalaun">Jalaun</option> <option value="Jalgaon">Jalgaon</option> <option value="Jalna">Jalna</option> <option value="Jalore">Jalore</option> <option value="Jalpaiguri">Jalpaiguri</option> <option value="Jammu">Jammu</option> <option value="Jamnagar">Jamnagar</option> <option value="Jamtara">Jamtara</option> <option value="Jamui">Jamui</option> <option value="Janjgir-Champa">Janjgir-Champa</option> <option value="Jashpur">Jashpur</option> <option value="Jaunpurdistrict">Jaunpur district</option> <option value="Jehanabad">Jehanabad</option> <option value="Jhabua">Jhabua</option> <option value="Jhajjar">Jhajjar</option> <option value="Jhalawar">Jhalawar</option> <option value="Jhansi">Jhansi</option> <option value="Jharsuguda">Jharsuguda</option> <option value="Jhunjhunu">Jhunjhunu</option> <option value="Jind">Jind</option> <option value="Jodhpur">Jodhpur</option> <option value="Jorhat">Jorhat</option> <option value="Junagadh">Junagadh</option> <option value="JyotibaPhuleNagar">Jyotiba Phule Nagar</option> <option value="Kabirdham(formerlyKawardha)"> Kabirdham (formerly Kawardha) </option> <option value="Kadapa">Kadapa</option> <option value="Kaimur">Kaimur</option> <option value="Kaithal">Kaithal</option> <option value="Kakinada">Kakinada</option> <option value="Kalahandi">Kalahandi</option> <option value="Kamrup">Kamrup</option> <option value="KamrupMetropolitan">Kamrup Metropolitan</option> <option value="Kanchipuram">Kanchipuram</option> <option value="Kandhamal">Kandhamal</option> <option value="Kangra">Kangra</option> <option value="Kanker">Kanker</option> <option value="Kannauj">Kannauj</option> <option value="Kannur">Kannur</option> <option value="Kanpur">Kanpur</option> <option value="KanshiRamNagar">Kanshi Ram Nagar</option> <option value="Kanyakumari">Kanyakumari</option> <option value="Kapurthala">Kapurthala</option> <option value="Karaikal">Karaikal</option> <option value="Karauli">Karauli</option> <option value="KarbiAnglong">Karbi Anglong</option> <option value="Kargil">Kargil</option> <option value="Karimganj">Karimganj</option> <option value="Karimnagar">Karimnagar</option> <option value="Karnal">Karnal</option> <option value="Karur">Karur</option> <option value="Kasaragod">Kasaragod</option> <option value="Kathua">Kathua</option> <option value="Katihar">Katihar</option> <option value="Katni">Katni</option> <option value="Kaushambi">Kaushambi</option> <option value="Kendrapara">Kendrapara</option> <option value="Kendujhar(Keonjhar)"> Kendujhar (Keonjhar) </option> <option value="Khagaria">Khagaria</option> <option value="Khammam">Khammam</option> <option value="Khandwa(EastNimar)">Khandwa (East Nimar)</option> <option value="Khargone(WestNimar)"> Khargone (West Nimar) </option> <option value="Kheda">Kheda</option> <option value="Khordha">Khordha</option> <option value="Khowai">Khowai</option> <option value="Khunti">Khunti</option> <option value="Kinnaur">Kinnaur</option> <option value="Kishanganj">Kishanganj</option> <option value="Kishtwar">Kishtwar</option> <option value="Kodagu">Kodagu</option> <option value="Koderma">Koderma</option> <option value="Kohima">Kohima</option> <option value="Kokrajhar">Kokrajhar</option> <option value="Kolar">Kolar</option> <option value="Kolasib">Kolasib</option> <option value="Kolhapur">Kolhapur</option> <option value="Kolkata">Kolkata</option> <option value="Kollam">Kollam</option> <option value="Koppal">Koppal</option> <option value="Koraput">Koraput</option> <option value="Korba">Korba</option> <option value="Koriya">Koriya</option> <option value="Kota">Kota</option> <option value="Kottayam">Kottayam</option> <option value="Kozhikode">Kozhikode</option> <option value="Krishna">Krishna</option> <option value="Kulgam">Kulgam</option> <option value="Kullu">Kullu</option> <option value="Kupwara">Kupwara</option> <option value="Kurnool">Kurnool</option> <option value="Kurukshetra">Kurukshetra</option> <option value="KurungKumey">Kurung Kumey</option> <option value="Kushinagar">Kushinagar</option> <option value="Kutch">Kutch</option> <option value="LahaulandSpiti">Lahaul and Spiti</option> <option value="Lakhimpur">Lakhimpur</option> <option value="LakhimpurKheri">Lakhimpur Kheri</option> <option value="Lakhisarai">Lakhisarai</option> <option value="Lalitpur">Lalitpur</option> <option value="Latehar">Latehar</option> <option value="Latur">Latur</option> <option value="Lawngtlai">Lawngtlai</option> <option value="Leh">Leh</option> <option value="Lohardaga">Lohardaga</option> <option value="Lohit">Lohit</option> <option value="LowerDibangValley">Lower Dibang Valley</option> <option value="LowerSubansiri">Lower Subansiri</option> <option value="Lucknow">Lucknow</option> <option value="Ludhiana">Ludhiana</option> <option value="Lunglei">Lunglei</option> <option value="Madhepura">Madhepura</option> <option value="Madhubani">Madhubani</option> <option value="Madurai">Madurai</option> <option value="MahamayaNagar">Mahamaya Nagar</option> <option value="Maharajganj">Maharajganj</option> <option value="Mahasamund">Mahasamund</option> <option value="Mahbubnagar">Mahbubnagar</option> <option value="Mahe">Mahe</option> <option value="Mahendragarh">Mahendragarh</option> <option value="Mahoba">Mahoba</option> <option value="Mainpuri">Mainpuri</option> <option value="Malappuram">Malappuram</option> <option value="Maldah">Maldah</option> <option value="Malkangiri">Malkangiri</option> <option value="Mamit">Mamit</option> <option value="Mandi">Mandi</option> <option value="Mandla">Mandla</option> <option value="Mandsaur">Mandsaur</option> <option value="Mandya">Mandya</option> <option value="Mansa">Mansa</option> <option value="Marigaon">Marigaon</option> <option value="Mathura">Mathura</option> <option value="Mau">Mau</option> <option value="Mayurbhanj">Mayurbhanj</option> <option value="Medak">Medak</option> <option value="Meerut">Meerut</option> <option value="Mehsana">Mehsana</option> <option value="Mewat">Mewat</option> <option value="Mirzapur">Mirzapur</option> <option value="Moga">Moga</option> <option value="Mokokchung">Mokokchung</option> <option value="Mon">Mon</option> <option value="Moradabad">Moradabad</option> <option value="Morena">Morena</option> <option value="MumbaiCity">Mumbai City</option> <option value="Mumbaisuburban">Mumbai suburban</option> <option value="Munger">Munger</option> <option value="Murshidabad">Murshidabad</option> <option value="Muzaffarnagar">Muzaffarnagar</option> <option value="Muzaffarpur">Muzaffarpur</option> <option value="Mysore">Mysore</option> <option value="Nabarangpur">Nabarangpur</option> <option value="Nadia">Nadia</option> <option value="Nagaon">Nagaon</option> <option value="Nagapattinam">Nagapattinam</option> <option value="Nagaur">Nagaur</option> <option value="Nagpur">Nagpur</option> <option value="Nainital">Nainital</option> <option value="Nalanda">Nalanda</option> <option value="Nalbari">Nalbari</option> <option value="Nalgonda">Nalgonda</option> <option value="Namakkal">Namakkal</option> <option value="Nanded">Nanded</option> <option value="Nandurbar">Nandurbar</option> <option value="Narayanpur">Narayanpur</option> <option value="Narmada">Narmada</option> <option value="Narsinghpur">Narsinghpur</option> <option value="Nashik">Nashik</option> <option value="Navsari">Navsari</option> <option value="Nawada">Nawada</option> <option value="Nawanshahr">Nawanshahr</option> <option value="Nayagarh">Nayagarh</option> <option value="Neemuch">Neemuch</option> <option value="Nellore">Nellore</option> <option value="NewDelhi">New Delhi</option> <option value="Nilgiris">Nilgiris</option> <option value="Nizamabad">Nizamabad</option> <option value="North24Parganas">North 24 Parganas</option> <option value="NorthDelhi">North Delhi</option> <option value="NorthEastDelhi">North East Delhi</option> <option value="NorthGoa">North Goa</option> <option value="NorthSikkim">North Sikkim</option> <option value="NorthTripura">North Tripura</option> <option value="NorthWestDelhi">North West Delhi</option> <option value="Nuapada">Nuapada</option> <option value="Ongole">Ongole</option> <option value="Osmanabad">Osmanabad</option> <option value="Pakur">Pakur</option> <option value="Palakkad">Palakkad</option> <option value="Palamu">Palamu</option> <option value="Pali">Pali</option> <option value="Palwal">Palwal</option> <option value="Panchkula">Panchkula</option> <option value="Panchmahal">Panchmahal</option> <option value="PanchsheelNagardistrict(Hapur)"> Panchsheel Nagar district (Hapur) </option> <option value="Panipat">Panipat</option> <option value="Panna">Panna</option> <option value="PapumPare">Papum Pare</option> <option value="Parbhani">Parbhani</option> <option value="PaschimMedinipur">Paschim Medinipur</option> <option value="Patan">Patan</option> <option value="Pathanamthitta">Pathanamthitta</option> <option value="Pathankot">Pathankot</option> <option value="Patiala">Patiala</option> <option value="Patna">Patna</option> <option value="PauriGarhwal">Pauri Garhwal</option> <option value="Perambalur">Perambalur</option> <option value="Phek">Phek</option> <option value="Pilibhit">Pilibhit</option> <option value="Pithoragarh">Pithoragarh</option> <option value="Pondicherry">Pondicherry</option> <option value="Poonch">Poonch</option> <option value="Porbandar">Porbandar</option> <option value="Pratapgarh">Pratapgarh</option> <option value="Pratapgarh">Pratapgarh</option> <option value="Pudukkottai">Pudukkottai</option> <option value="Pulwama">Pulwama</option> <option value="Pune">Pune</option> <option value="PurbaMedinipur">Purba Medinipur</option> <option value="Puri">Puri</option> <option value="Purnia">Purnia</option> <option value="Purulia">Purulia</option> <option value="Raebareli">Raebareli</option> <option value="Raichur">Raichur</option> <option value="Raigad">Raigad</option> <option value="Raigarh">Raigarh</option> <option value="Raipur">Raipur</option> <option value="Raisen">Raisen</option> <option value="Rajauri">Rajauri</option> <option value="Rajgarh">Rajgarh</option> <option value="Rajkot">Rajkot</option> <option value="Rajnandgaon">Rajnandgaon</option> <option value="Rajsamand">Rajsamand</option> <option value="RamabaiNagar(KanpurDehat)"> Ramabai Nagar (Kanpur Dehat) </option> <option value="Ramanagara">Ramanagara</option> <option value="Ramanathapuram">Ramanathapuram</option> <option value="Ramban">Ramban</option> <option value="Ramgarh">Ramgarh</option> <option value="Rampur">Rampur</option> <option value="Ranchi">Ranchi</option> <option value="Ratlam">Ratlam</option> <option value="Ratnagiri">Ratnagiri</option> <option value="Rayagada">Rayagada</option> <option value="Reasi">Reasi</option> <option value="Rewa">Rewa</option> <option value="Rewari">Rewari</option> <option value="RiBhoi">Ri Bhoi</option> <option value="Rohtak">Rohtak</option> <option value="Rohtas">Rohtas</option> <option value="Rudraprayag">Rudraprayag</option> <option value="Rupnagar">Rupnagar</option> <option value="Sabarkantha">Sabarkantha</option> <option value="Sagar">Sagar</option> <option value="Saharanpur">Saharanpur</option> <option value="Saharsa">Saharsa</option> <option value="Sahibganj">Sahibganj</option> <option value="Saiha">Saiha</option> <option value="Salem">Salem</option> <option value="Samastipur">Samastipur</option> <option value="Samba">Samba</option> <option value="Sambalpur">Sambalpur</option> <option value="Sangli">Sangli</option> <option value="Sangrur">Sangrur</option> <option value="SantKabirNagar">Sant Kabir Nagar</option> <option value="SantRavidasNagar">Sant Ravidas Nagar</option> <option value="Saran">Saran</option> <option value="Satara">Satara</option> <option value="Satna">Satna</option> <option value="SawaiMadhopur">Sawai Madhopur</option> <option value="Sehore">Sehore</option> <option value="Senapati">Senapati</option> <option value="Seoni">Seoni</option> <option value="SeraikelaKharsawan">Seraikela Kharsawan</option> <option value="Serchhip">Serchhip</option> <option value="Shahdol">Shahdol</option> <option value="Shahjahanpur">Shahjahanpur</option> <option value="Shajapur">Shajapur</option> <option value="Shamli">Shamli</option> <option value="Sheikhpura">Sheikhpura</option> <option value="Sheohar">Sheohar</option> <option value="Sheopur">Sheopur</option> <option value="Shimla">Shimla</option> <option value="Shimoga">Shimoga</option> <option value="Shivpuri">Shivpuri</option> <option value="Shopian">Shopian</option> <option value="Shravasti">Shravasti</option> <option value="Sibsagar">Sibsagar</option> <option value="Siddharthnagar">Siddharthnagar</option> <option value="Sidhi">Sidhi</option> <option value="Sikar">Sikar</option> <option value="Simdega">Simdega</option> <option value="Sindhudurg">Sindhudurg</option> <option value="Singrauli">Singrauli</option> <option value="Sirmaur">Sirmaur</option> <option value="Sirohi">Sirohi</option> <option value="Sirsa">Sirsa</option> <option value="Sitamarhi">Sitamarhi</option> <option value="Sitapur">Sitapur</option> <option value="Sivaganga">Sivaganga</option> <option value="Siwan">Siwan</option> <option value="Solan">Solan</option> <option value="Solapur">Solapur</option> <option value="Sonbhadra">Sonbhadra</option> <option value="Sonipat">Sonipat</option> <option value="Sonitpur">Sonitpur</option> <option value="South24Parganas">South 24 Parganas</option> <option value="SouthDelhi">South Delhi</option> <option value="SouthGaroHills">South Garo Hills</option> <option value="SouthGoa">South Goa</option> <option value="SouthSikkim">South Sikkim</option> <option value="SouthTripura">South Tripura</option> <option value="SouthWestDelhi">South West Delhi</option> <option value="SriMuktsarSahib">Sri Muktsar Sahib</option> <option value="Srikakulam">Srikakulam</option> <option value="Srinagar">Srinagar</option> <option value="Subarnapur(Sonepur)"> Subarnapur (Sonepur) </option> <option value="Sultanpur">Sultanpur</option> <option value="Sundergarh">Sundergarh</option> <option value="Supaul">Supaul</option> <option value="Surat">Surat</option> <option value="Surendranagar">Surendranagar</option> <option value="Surguja">Surguja</option> <option value="Tamenglong">Tamenglong</option> <option value="TarnTaran">Tarn Taran</option> <option value="Tawang">Tawang</option> <option value="TehriGarhwal">Tehri Garhwal</option> <option value="Thane">Thane</option> <option value="Thanjavur">Thanjavur</option> <option value="TheDangs">The Dangs</option> <option value="Theni">Theni</option> <option value="Thiruvananthapuram">Thiruvananthapuram</option> <option value="Thoothukudi">Thoothukudi</option> <option value="Thoubal">Thoubal</option> <option value="Thrissur">Thrissur</option> <option value="Tikamgarh">Tikamgarh</option> <option value="Tinsukia">Tinsukia</option> <option value="Tirap">Tirap</option> <option value="Tiruchirappalli">Tiruchirappalli</option> <option value="Tirunelveli">Tirunelveli</option> <option value="Tirupur">Tirupur</option> <option value="Tiruvallur">Tiruvallur</option> <option value="Tiruvannamalai">Tiruvannamalai</option> <option value="Tiruvarur">Tiruvarur</option> <option value="Tonk">Tonk</option> <option value="Tuensang">Tuensang</option> <option value="Tumkur">Tumkur</option> <option value="Udaipur">Udaipur</option> <option value="Udalguri">Udalguri</option> <option value="UdhamSinghNagar">Udham Singh Nagar</option> <option value="Udhampur">Udhampur</option> <option value="Udupi">Udupi</option> <option value="Ujjain">Ujjain</option> <option value="Ukhrul">Ukhrul</option> <option value="Umaria">Umaria</option> <option value="Una">Una</option> <option value="Unnao">Unnao</option> <option value="UpperSiang">Upper Siang</option> <option value="UpperSubansiri">Upper Subansiri</option> <option value="UttarDinajpur">Uttar Dinajpur</option> <option value="UttaraKannada">Uttara Kannada</option> <option value="Uttarkashi">Uttarkashi</option> <option value="Vadodara">Vadodara</option> <option value="Vaishali">Vaishali</option> <option value="Valsad">Valsad</option> <option value="Varanasi">Varanasi</option> <option value="Vellore">Vellore</option> <option value="Vidisha">Vidisha</option> <option value="Viluppuram">Viluppuram</option> <option value="Virudhunagar">Virudhunagar</option> <option value="Visakhapatnam">Visakhapatnam</option> <option value="Vizianagaram">Vizianagaram</option> <option value="Vyara">Vyara</option> <option value="Warangal">Warangal</option> <option value="Wardha">Wardha</option> <option value="Washim">Washim</option> <option value="Wayanad">Wayanad</option> <option value="WestChamparan">West Champaran</option> <option value="WestDelhi">West Delhi</option> <option value="WestGaroHills">West Garo Hills</option> <option value="WestKameng">West Kameng</option> <option value="WestKhasiHills">West Khasi Hills</option> <option value="WestSiang">West Siang</option> <option value="WestSikkim">West Sikkim</option> <option value="WestSinghbhum">West Singhbhum</option> <option value="WestTripura">West Tripura</option> <option value="Wokha">Wokha</option> <option value="Yadgir">Yadgir</option> <option value="YamunaNagar">Yamuna Nagar</option> <option value="Yanam">Yanam</option> <option value="Yavatmal">Yavatmal</option> <option value="Zunheboto">Zunheboto</option>
                    </select>
                </label><br />

                <label className='input-box' htmlFor='area'>Area <br />
                    <select id="area" name="area" onChange={(e) => { handleFormData(e) }} className='selection-input'>
                        {formData.area === "" ? <option value="Select Area">Select Area</option> :
                            <option value={formData.area}>{formData.area}</option>}
                        <option value="Adilabad">Adilabad</option> <option value="Agra">Agra</option> <option value="Ahmedabad">Ahmedabad</option> <option value="Ahmednagar">Ahmednagar</option> <option value="Aizawl">Aizawl</option> <option value="Ajitgarh(Mohali)">Ajitgarh (Mohali)</option> <option value="Ajmer">Ajmer</option> <option value="Akola">Akola</option> <option value="Alappuzha">Alappuzha</option> <option value="Aligarh">Aligarh</option> <option value="Alirajpur">Alirajpur</option> <option value="Allahabad">Allahabad</option> <option value="Almora">Almora</option> <option value="Alwar">Alwar</option> <option value="Ambala">Ambala</option> <option value="AmbedkarNagar">Ambedkar Nagar</option> <option value="Amravati">Amravati</option> <option value="Amrelidistrict">Amreli district</option> <option value="Amritsar">Amritsar</option> <option value="Anand">Anand</option> <option value="Anantapur">Anantapur</option> <option value="Anantnag">Anantnag</option> <option value="Angul">Angul</option> <option value="Anjaw">Anjaw</option> <option value="Anuppur">Anuppur</option> <option value="Araria">Araria</option> <option value="Ariyalur">Ariyalur</option> <option value="Arwal">Arwal</option> <option value="AshokNagar">Ashok Nagar</option> <option value="Auraiya">Auraiya</option> <option value="Aurangabad">Aurangabad</option> <option value="Aurangabad">Aurangabad</option> <option value="Azamgarh">Azamgarh</option> <option value="Badgam">Badgam</option> <option value="Bagalkot">Bagalkot</option> <option value="Bageshwar">Bageshwar</option> <option value="Bagpat">Bagpat</option> <option value="Bahraich">Bahraich</option> <option value="Baksa">Baksa</option> <option value="Balaghat">Balaghat</option> <option value="Balangir">Balangir</option> <option value="Balasore">Balasore</option> <option value="Ballia">Ballia</option> <option value="Balrampur">Balrampur</option> <option value="Banaskantha">Banaskantha</option> <option value="Banda">Banda</option> <option value="Bandipora">Bandipora</option> <option value="BangaloreRural">Bangalore Rural</option> <option value="BangaloreUrban">Bangalore Urban</option> <option value="Banka">Banka</option> <option value="Bankura">Bankura</option> <option value="Banswara">Banswara</option> <option value="Barabanki">Barabanki</option> <option value="Baramulla">Baramulla</option> <option value="Baran">Baran</option> <option value="Bardhaman">Bardhaman</option> <option value="Bareilly">Bareilly</option> <option value="Bargarh(Baragarh)">Bargarh (Baragarh)</option> <option value="Barmer">Barmer</option> <option value="Barnala">Barnala</option> <option value="Barpeta">Barpeta</option> <option value="Barwani">Barwani</option> <option value="Bastar">Bastar</option> <option value="Basti">Basti</option> <option value="Bathinda">Bathinda</option> <option value="Beed">Beed</option> <option value="Begusarai">Begusarai</option> <option value="Belgaum">Belgaum</option> <option value="Bellary">Bellary</option> <option value="Betul">Betul</option> <option value="Bhadrak">Bhadrak</option> <option value="Bhagalpur">Bhagalpur</option> <option value="Bhandara">Bhandara</option> <option value="Bharatpur">Bharatpur</option> <option value="Bharuch">Bharuch</option> <option value="Bhavnagar">Bhavnagar</option> <option value="Bhilwara">Bhilwara</option> <option value="Bhind">Bhind</option> <option value="Bhiwani">Bhiwani</option> <option value="Bhojpur">Bhojpur</option> <option value="Bhopal">Bhopal</option> <option value="Bidar">Bidar</option> <option value="Bijapur">Bijapur</option> <option value="Bijapur">Bijapur</option> <option value="Bijnor">Bijnor</option> <option value="Bikaner">Bikaner</option> <option value="Bilaspur">Bilaspur</option> <option value="Bilaspur">Bilaspur</option> <option value="Birbhum">Birbhum</option> <option value="Bishnupur">Bishnupur</option> <option value="Bokaro">Bokaro</option> <option value="Bongaigaon">Bongaigaon</option> <option value="Boudh(Bauda)">Boudh (Bauda)</option> <option value="Budaun">Budaun</option> <option value="Bulandshahr">Bulandshahr</option> <option value="Buldhana">Buldhana</option> <option value="Bundi">Bundi</option> <option value="Burhanpur">Burhanpur</option> <option value="Buxar">Buxar</option> <option value="Cachar">Cachar</option> <option value="CentralDelhi">Central Delhi</option> <option value="Chamarajnagar">Chamarajnagar</option> <option value="Chamba">Chamba</option> <option value="Chamoli">Chamoli</option> <option value="Champawat">Champawat</option> <option value="Champhai">Champhai</option> <option value="Chandauli">Chandauli</option> <option value="Chandel">Chandel</option> <option value="Chandigarh">Chandigarh</option> <option value="Chandrapur">Chandrapur</option> <option value="Changlang">Changlang</option> <option value="Chatra">Chatra</option> <option value="Chennai">Chennai</option> <option value="Chhatarpur">Chhatarpur</option> <option value="ChhatrapatiShahujiMaharajNagar"> Chhatrapati Shahuji Maharaj Nagar </option> <option value="Chhindwara">Chhindwara</option> <option value="Chikkaballapur">Chikkaballapur</option> <option value="Chikkamagaluru">Chikkamagaluru</option> <option value="Chirang">Chirang</option> <option value="Chitradurga">Chitradurga</option> <option value="Chitrakoot">Chitrakoot</option> <option value="Chittoor">Chittoor</option> <option value="Chittorgarh">Chittorgarh</option> <option value="Churachandpur">Churachandpur</option> <option value="Churu">Churu</option> <option value="Coimbatore">Coimbatore</option> <option value="CoochBehar">Cooch Behar</option> <option value="Cuddalore">Cuddalore</option> <option value="Cuttack">Cuttack</option> <option value="DadraandNagarHaveli"> Dadra and Nagar Haveli </option> <option value="Dahod">Dahod</option> <option value="DakshinDinajpur">Dakshin Dinajpur</option> <option value="DakshinaKannada">Dakshina Kannada</option> <option value="Daman">Daman</option> <option value="Damoh">Damoh</option> <option value="Dantewada">Dantewada</option> <option value="Darbhanga">Darbhanga</option> <option value="Darjeeling">Darjeeling</option> <option value="Darrang">Darrang</option> <option value="Datia">Datia</option> <option value="Dausa">Dausa</option> <option value="Davanagere">Davanagere</option> <option value="Debagarh(Deogarh)">Debagarh (Deogarh)</option> <option value="Dehradun">Dehradun</option> <option value="Deoghar">Deoghar</option> <option value="Deoria">Deoria</option> <option value="Dewas">Dewas</option> <option value="Dhalai">Dhalai</option> <option value="Dhamtari">Dhamtari</option> <option value="Dhanbad">Dhanbad</option> <option value="Dhar">Dhar</option> <option value="Dharmapuri">Dharmapuri</option> <option value="Dharwad">Dharwad</option> <option value="Dhemaji">Dhemaji</option> <option value="Dhenkanal">Dhenkanal</option> <option value="Dholpur">Dholpur</option> <option value="Dhubri">Dhubri</option> <option value="Dhule">Dhule</option> <option value="DibangValley">Dibang Valley</option> <option value="Dibrugarh">Dibrugarh</option> <option value="DimaHasao">Dima Hasao</option> <option value="Dimapur">Dimapur</option> <option value="Dindigul">Dindigul</option> <option value="Dindori">Dindori</option> <option value="Diu">Diu</option> <option value="Doda">Doda</option> <option value="Dumka">Dumka</option> <option value="Dungapur">Dungapur</option> <option value="Durg">Durg</option> <option value="EastChamparan">East Champaran</option> <option value="EastDelhi">East Delhi</option> <option value="EastGaroHills">East Garo Hills</option> <option value="EastKhasiHills">East Khasi Hills</option> <option value="EastSiang">East Siang</option> <option value="EastSikkim">East Sikkim</option> <option value="EastSinghbhum">East Singhbhum</option> <option value="Eluru">Eluru</option> <option value="Ernakulam">Ernakulam</option> <option value="Erode">Erode</option> <option value="Etah">Etah</option> <option value="Etawah">Etawah</option> <option value="Faizabad">Faizabad</option> <option value="Faridabad">Faridabad</option> <option value="Faridkot">Faridkot</option> <option value="Farrukhabad">Farrukhabad</option> <option value="Fatehabad">Fatehabad</option> <option value="FatehgarhSahib">Fatehgarh Sahib</option> <option value="Fatehpur">Fatehpur</option> <option value="Fazilka">Fazilka</option> <option value="Firozabad">Firozabad</option> <option value="Firozpur">Firozpur</option> <option value="Gadag">Gadag</option> <option value="Gadchiroli">Gadchiroli</option> <option value="Gajapati">Gajapati</option> <option value="Ganderbal">Ganderbal</option> <option value="Gandhinagar">Gandhinagar</option> <option value="Ganganagar">Ganganagar</option> <option value="Ganjam">Ganjam</option> <option value="Garhwa">Garhwa</option> <option value="GautamBuddhNagar">Gautam Buddh Nagar</option> <option value="Gaya">Gaya</option> <option value="Ghaziabad">Ghaziabad</option> <option value="Ghazipur">Ghazipur</option> <option value="Giridih">Giridih</option> <option value="Goalpara">Goalpara</option> <option value="Godda">Godda</option> <option value="Golaghat">Golaghat</option> <option value="Gonda">Gonda</option> <option value="Gondia">Gondia</option> <option value="Gopalganj">Gopalganj</option> <option value="Gorakhpur">Gorakhpur</option> <option value="Gulbarga">Gulbarga</option> <option value="Gumla">Gumla</option> <option value="Guna">Guna</option> <option value="Guntur">Guntur</option> <option value="Gurdaspur">Gurdaspur</option> <option value="Gurgaon">Gurgaon</option> <option value="Gwalior">Gwalior</option> <option value="Hailakandi">Hailakandi</option> <option value="Hamirpur">Hamirpur</option> <option value="Hamirpur">Hamirpur</option> <option value="Hanumangarh">Hanumangarh</option> <option value="Harda">Harda</option> <option value="Hardoi">Hardoi</option> <option value="Haridwar">Haridwar</option> <option value="Hassan">Hassan</option> <option value="Haveridistrict">Haveri district</option> <option value="Hazaribag">Hazaribag</option> <option value="Hingoli">Hingoli</option> <option value="Hissar">Hissar</option> <option value="Hooghly">Hooghly</option> <option value="Hoshangabad">Hoshangabad</option> <option value="Hoshiarpur">Hoshiarpur</option> <option value="Howrah">Howrah</option> <option value="Hyderabad">Hyderabad</option> <option value="Hyderabad">Hyderabad</option> <option value="Idukki">Idukki</option> <option value="ImphalEast">Imphal East</option> <option value="ImphalWest">Imphal West</option> <option value="Indore">Indore</option> <option value="Jabalpur">Jabalpur</option> <option value="Jagatsinghpur">Jagatsinghpur</option> <option value="JaintiaHills">Jaintia Hills</option> <option value="Jaipur">Jaipur</option> <option value="Jaisalmer">Jaisalmer</option> <option value="Jajpur">Jajpur</option> <option value="Jalandhar">Jalandhar</option> <option value="Jalaun">Jalaun</option> <option value="Jalgaon">Jalgaon</option> <option value="Jalna">Jalna</option> <option value="Jalore">Jalore</option> <option value="Jalpaiguri">Jalpaiguri</option> <option value="Jammu">Jammu</option> <option value="Jamnagar">Jamnagar</option> <option value="Jamtara">Jamtara</option> <option value="Jamui">Jamui</option> <option value="Janjgir-Champa">Janjgir-Champa</option> <option value="Jashpur">Jashpur</option> <option value="Jaunpurdistrict">Jaunpur district</option> <option value="Jehanabad">Jehanabad</option> <option value="Jhabua">Jhabua</option> <option value="Jhajjar">Jhajjar</option> <option value="Jhalawar">Jhalawar</option> <option value="Jhansi">Jhansi</option> <option value="Jharsuguda">Jharsuguda</option> <option value="Jhunjhunu">Jhunjhunu</option> <option value="Jind">Jind</option> <option value="Jodhpur">Jodhpur</option> <option value="Jorhat">Jorhat</option> <option value="Junagadh">Junagadh</option> <option value="JyotibaPhuleNagar">Jyotiba Phule Nagar</option> <option value="Kabirdham(formerlyKawardha)"> Kabirdham (formerly Kawardha) </option> <option value="Kadapa">Kadapa</option> <option value="Kaimur">Kaimur</option> <option value="Kaithal">Kaithal</option> <option value="Kakinada">Kakinada</option> <option value="Kalahandi">Kalahandi</option> <option value="Kamrup">Kamrup</option> <option value="KamrupMetropolitan">Kamrup Metropolitan</option> <option value="Kanchipuram">Kanchipuram</option> <option value="Kandhamal">Kandhamal</option> <option value="Kangra">Kangra</option> <option value="Kanker">Kanker</option> <option value="Kannauj">Kannauj</option> <option value="Kannur">Kannur</option> <option value="Kanpur">Kanpur</option> <option value="KanshiRamNagar">Kanshi Ram Nagar</option> <option value="Kanyakumari">Kanyakumari</option> <option value="Kapurthala">Kapurthala</option> <option value="Karaikal">Karaikal</option> <option value="Karauli">Karauli</option> <option value="KarbiAnglong">Karbi Anglong</option> <option value="Kargil">Kargil</option> <option value="Karimganj">Karimganj</option> <option value="Karimnagar">Karimnagar</option> <option value="Karnal">Karnal</option> <option value="Karur">Karur</option> <option value="Kasaragod">Kasaragod</option> <option value="Kathua">Kathua</option> <option value="Katihar">Katihar</option> <option value="Katni">Katni</option> <option value="Kaushambi">Kaushambi</option> <option value="Kendrapara">Kendrapara</option> <option value="Kendujhar(Keonjhar)"> Kendujhar (Keonjhar) </option> <option value="Khagaria">Khagaria</option> <option value="Khammam">Khammam</option> <option value="Khandwa(EastNimar)">Khandwa (East Nimar)</option> <option value="Khargone(WestNimar)"> Khargone (West Nimar) </option> <option value="Kheda">Kheda</option> <option value="Khordha">Khordha</option> <option value="Khowai">Khowai</option> <option value="Khunti">Khunti</option> <option value="Kinnaur">Kinnaur</option> <option value="Kishanganj">Kishanganj</option> <option value="Kishtwar">Kishtwar</option> <option value="Kodagu">Kodagu</option> <option value="Koderma">Koderma</option> <option value="Kohima">Kohima</option> <option value="Kokrajhar">Kokrajhar</option> <option value="Kolar">Kolar</option> <option value="Kolasib">Kolasib</option> <option value="Kolhapur">Kolhapur</option> <option value="Kolkata">Kolkata</option> <option value="Kollam">Kollam</option> <option value="Koppal">Koppal</option> <option value="Koraput">Koraput</option> <option value="Korba">Korba</option> <option value="Koriya">Koriya</option> <option value="Kota">Kota</option> <option value="Kottayam">Kottayam</option> <option value="Kozhikode">Kozhikode</option> <option value="Krishna">Krishna</option> <option value="Kulgam">Kulgam</option> <option value="Kullu">Kullu</option> <option value="Kupwara">Kupwara</option> <option value="Kurnool">Kurnool</option> <option value="Kurukshetra">Kurukshetra</option> <option value="KurungKumey">Kurung Kumey</option> <option value="Kushinagar">Kushinagar</option> <option value="Kutch">Kutch</option> <option value="LahaulandSpiti">Lahaul and Spiti</option> <option value="Lakhimpur">Lakhimpur</option> <option value="LakhimpurKheri">Lakhimpur Kheri</option> <option value="Lakhisarai">Lakhisarai</option> <option value="Lalitpur">Lalitpur</option> <option value="Latehar">Latehar</option> <option value="Latur">Latur</option> <option value="Lawngtlai">Lawngtlai</option> <option value="Leh">Leh</option> <option value="Lohardaga">Lohardaga</option> <option value="Lohit">Lohit</option> <option value="LowerDibangValley">Lower Dibang Valley</option> <option value="LowerSubansiri">Lower Subansiri</option> <option value="Lucknow">Lucknow</option> <option value="Ludhiana">Ludhiana</option> <option value="Lunglei">Lunglei</option> <option value="Madhepura">Madhepura</option> <option value="Madhubani">Madhubani</option> <option value="Madurai">Madurai</option> <option value="MahamayaNagar">Mahamaya Nagar</option> <option value="Maharajganj">Maharajganj</option> <option value="Mahasamund">Mahasamund</option> <option value="Mahbubnagar">Mahbubnagar</option> <option value="Mahe">Mahe</option> <option value="Mahendragarh">Mahendragarh</option> <option value="Mahoba">Mahoba</option> <option value="Mainpuri">Mainpuri</option> <option value="Malappuram">Malappuram</option> <option value="Maldah">Maldah</option> <option value="Malkangiri">Malkangiri</option> <option value="Mamit">Mamit</option> <option value="Mandi">Mandi</option> <option value="Mandla">Mandla</option> <option value="Mandsaur">Mandsaur</option> <option value="Mandya">Mandya</option> <option value="Mansa">Mansa</option> <option value="Marigaon">Marigaon</option> <option value="Mathura">Mathura</option> <option value="Mau">Mau</option> <option value="Mayurbhanj">Mayurbhanj</option> <option value="Medak">Medak</option> <option value="Meerut">Meerut</option> <option value="Mehsana">Mehsana</option> <option value="Mewat">Mewat</option> <option value="Mirzapur">Mirzapur</option> <option value="Moga">Moga</option> <option value="Mokokchung">Mokokchung</option> <option value="Mon">Mon</option> <option value="Moradabad">Moradabad</option> <option value="Morena">Morena</option> <option value="MumbaiCity">Mumbai City</option> <option value="Mumbaisuburban">Mumbai suburban</option> <option value="Munger">Munger</option> <option value="Murshidabad">Murshidabad</option> <option value="Muzaffarnagar">Muzaffarnagar</option> <option value="Muzaffarpur">Muzaffarpur</option> <option value="Mysore">Mysore</option> <option value="Nabarangpur">Nabarangpur</option> <option value="Nadia">Nadia</option> <option value="Nagaon">Nagaon</option> <option value="Nagapattinam">Nagapattinam</option> <option value="Nagaur">Nagaur</option> <option value="Nagpur">Nagpur</option> <option value="Nainital">Nainital</option> <option value="Nalanda">Nalanda</option> <option value="Nalbari">Nalbari</option> <option value="Nalgonda">Nalgonda</option> <option value="Namakkal">Namakkal</option> <option value="Nanded">Nanded</option> <option value="Nandurbar">Nandurbar</option> <option value="Narayanpur">Narayanpur</option> <option value="Narmada">Narmada</option> <option value="Narsinghpur">Narsinghpur</option> <option value="Nashik">Nashik</option> <option value="Navsari">Navsari</option> <option value="Nawada">Nawada</option> <option value="Nawanshahr">Nawanshahr</option> <option value="Nayagarh">Nayagarh</option> <option value="Neemuch">Neemuch</option> <option value="Nellore">Nellore</option> <option value="NewDelhi">New Delhi</option> <option value="Nilgiris">Nilgiris</option> <option value="Nizamabad">Nizamabad</option> <option value="North24Parganas">North 24 Parganas</option> <option value="NorthDelhi">North Delhi</option> <option value="NorthEastDelhi">North East Delhi</option> <option value="NorthGoa">North Goa</option> <option value="NorthSikkim">North Sikkim</option> <option value="NorthTripura">North Tripura</option> <option value="NorthWestDelhi">North West Delhi</option> <option value="Nuapada">Nuapada</option> <option value="Ongole">Ongole</option> <option value="Osmanabad">Osmanabad</option> <option value="Pakur">Pakur</option> <option value="Palakkad">Palakkad</option> <option value="Palamu">Palamu</option> <option value="Pali">Pali</option> <option value="Palwal">Palwal</option> <option value="Panchkula">Panchkula</option> <option value="Panchmahal">Panchmahal</option> <option value="PanchsheelNagardistrict(Hapur)"> Panchsheel Nagar district (Hapur) </option> <option value="Panipat">Panipat</option> <option value="Panna">Panna</option> <option value="PapumPare">Papum Pare</option> <option value="Parbhani">Parbhani</option> <option value="PaschimMedinipur">Paschim Medinipur</option> <option value="Patan">Patan</option> <option value="Pathanamthitta">Pathanamthitta</option> <option value="Pathankot">Pathankot</option> <option value="Patiala">Patiala</option> <option value="Patna">Patna</option> <option value="PauriGarhwal">Pauri Garhwal</option> <option value="Perambalur">Perambalur</option> <option value="Phek">Phek</option> <option value="Pilibhit">Pilibhit</option> <option value="Pithoragarh">Pithoragarh</option> <option value="Pondicherry">Pondicherry</option> <option value="Poonch">Poonch</option> <option value="Porbandar">Porbandar</option> <option value="Pratapgarh">Pratapgarh</option> <option value="Pratapgarh">Pratapgarh</option> <option value="Pudukkottai">Pudukkottai</option> <option value="Pulwama">Pulwama</option> <option value="Pune">Pune</option> <option value="PurbaMedinipur">Purba Medinipur</option> <option value="Puri">Puri</option> <option value="Purnia">Purnia</option> <option value="Purulia">Purulia</option> <option value="Raebareli">Raebareli</option> <option value="Raichur">Raichur</option> <option value="Raigad">Raigad</option> <option value="Raigarh">Raigarh</option> <option value="Raipur">Raipur</option> <option value="Raisen">Raisen</option> <option value="Rajauri">Rajauri</option> <option value="Rajgarh">Rajgarh</option> <option value="Rajkot">Rajkot</option> <option value="Rajnandgaon">Rajnandgaon</option> <option value="Rajsamand">Rajsamand</option> <option value="RamabaiNagar(KanpurDehat)"> Ramabai Nagar (Kanpur Dehat) </option> <option value="Ramanagara">Ramanagara</option> <option value="Ramanathapuram">Ramanathapuram</option> <option value="Ramban">Ramban</option> <option value="Ramgarh">Ramgarh</option> <option value="Rampur">Rampur</option> <option value="Ranchi">Ranchi</option> <option value="Ratlam">Ratlam</option> <option value="Ratnagiri">Ratnagiri</option> <option value="Rayagada">Rayagada</option> <option value="Reasi">Reasi</option> <option value="Rewa">Rewa</option> <option value="Rewari">Rewari</option> <option value="RiBhoi">Ri Bhoi</option> <option value="Rohtak">Rohtak</option> <option value="Rohtas">Rohtas</option> <option value="Rudraprayag">Rudraprayag</option> <option value="Rupnagar">Rupnagar</option> <option value="Sabarkantha">Sabarkantha</option> <option value="Sagar">Sagar</option> <option value="Saharanpur">Saharanpur</option> <option value="Saharsa">Saharsa</option> <option value="Sahibganj">Sahibganj</option> <option value="Saiha">Saiha</option> <option value="Salem">Salem</option> <option value="Samastipur">Samastipur</option> <option value="Samba">Samba</option> <option value="Sambalpur">Sambalpur</option> <option value="Sangli">Sangli</option> <option value="Sangrur">Sangrur</option> <option value="SantKabirNagar">Sant Kabir Nagar</option> <option value="SantRavidasNagar">Sant Ravidas Nagar</option> <option value="Saran">Saran</option> <option value="Satara">Satara</option> <option value="Satna">Satna</option> <option value="SawaiMadhopur">Sawai Madhopur</option> <option value="Sehore">Sehore</option> <option value="Senapati">Senapati</option> <option value="Seoni">Seoni</option> <option value="SeraikelaKharsawan">Seraikela Kharsawan</option> <option value="Serchhip">Serchhip</option> <option value="Shahdol">Shahdol</option> <option value="Shahjahanpur">Shahjahanpur</option> <option value="Shajapur">Shajapur</option> <option value="Shamli">Shamli</option> <option value="Sheikhpura">Sheikhpura</option> <option value="Sheohar">Sheohar</option> <option value="Sheopur">Sheopur</option> <option value="Shimla">Shimla</option> <option value="Shimoga">Shimoga</option> <option value="Shivpuri">Shivpuri</option> <option value="Shopian">Shopian</option> <option value="Shravasti">Shravasti</option> <option value="Sibsagar">Sibsagar</option> <option value="Siddharthnagar">Siddharthnagar</option> <option value="Sidhi">Sidhi</option> <option value="Sikar">Sikar</option> <option value="Simdega">Simdega</option> <option value="Sindhudurg">Sindhudurg</option> <option value="Singrauli">Singrauli</option> <option value="Sirmaur">Sirmaur</option> <option value="Sirohi">Sirohi</option> <option value="Sirsa">Sirsa</option> <option value="Sitamarhi">Sitamarhi</option> <option value="Sitapur">Sitapur</option> <option value="Sivaganga">Sivaganga</option> <option value="Siwan">Siwan</option> <option value="Solan">Solan</option> <option value="Solapur">Solapur</option> <option value="Sonbhadra">Sonbhadra</option> <option value="Sonipat">Sonipat</option> <option value="Sonitpur">Sonitpur</option> <option value="South24Parganas">South 24 Parganas</option> <option value="SouthDelhi">South Delhi</option> <option value="SouthGaroHills">South Garo Hills</option> <option value="SouthGoa">South Goa</option> <option value="SouthSikkim">South Sikkim</option> <option value="SouthTripura">South Tripura</option> <option value="SouthWestDelhi">South West Delhi</option> <option value="SriMuktsarSahib">Sri Muktsar Sahib</option> <option value="Srikakulam">Srikakulam</option> <option value="Srinagar">Srinagar</option> <option value="Subarnapur(Sonepur)"> Subarnapur (Sonepur) </option> <option value="Sultanpur">Sultanpur</option> <option value="Sundergarh">Sundergarh</option> <option value="Supaul">Supaul</option> <option value="Surat">Surat</option> <option value="Surendranagar">Surendranagar</option> <option value="Surguja">Surguja</option> <option value="Tamenglong">Tamenglong</option> <option value="TarnTaran">Tarn Taran</option> <option value="Tawang">Tawang</option> <option value="TehriGarhwal">Tehri Garhwal</option> <option value="Thane">Thane</option> <option value="Thanjavur">Thanjavur</option> <option value="TheDangs">The Dangs</option> <option value="Theni">Theni</option> <option value="Thiruvananthapuram">Thiruvananthapuram</option> <option value="Thoothukudi">Thoothukudi</option> <option value="Thoubal">Thoubal</option> <option value="Thrissur">Thrissur</option> <option value="Tikamgarh">Tikamgarh</option> <option value="Tinsukia">Tinsukia</option> <option value="Tirap">Tirap</option> <option value="Tiruchirappalli">Tiruchirappalli</option> <option value="Tirunelveli">Tirunelveli</option> <option value="Tirupur">Tirupur</option> <option value="Tiruvallur">Tiruvallur</option> <option value="Tiruvannamalai">Tiruvannamalai</option> <option value="Tiruvarur">Tiruvarur</option> <option value="Tonk">Tonk</option> <option value="Tuensang">Tuensang</option> <option value="Tumkur">Tumkur</option> <option value="Udaipur">Udaipur</option> <option value="Udalguri">Udalguri</option> <option value="UdhamSinghNagar">Udham Singh Nagar</option> <option value="Udhampur">Udhampur</option> <option value="Udupi">Udupi</option> <option value="Ujjain">Ujjain</option> <option value="Ukhrul">Ukhrul</option> <option value="Umaria">Umaria</option> <option value="Una">Una</option> <option value="Unnao">Unnao</option> <option value="UpperSiang">Upper Siang</option> <option value="UpperSubansiri">Upper Subansiri</option> <option value="UttarDinajpur">Uttar Dinajpur</option> <option value="UttaraKannada">Uttara Kannada</option> <option value="Uttarkashi">Uttarkashi</option> <option value="Vadodara">Vadodara</option> <option value="Vaishali">Vaishali</option> <option value="Valsad">Valsad</option> <option value="Varanasi">Varanasi</option> <option value="Vellore">Vellore</option> <option value="Vidisha">Vidisha</option> <option value="Viluppuram">Viluppuram</option> <option value="Virudhunagar">Virudhunagar</option> <option value="Visakhapatnam">Visakhapatnam</option> <option value="Vizianagaram">Vizianagaram</option> <option value="Vyara">Vyara</option> <option value="Warangal">Warangal</option> <option value="Wardha">Wardha</option> <option value="Washim">Washim</option> <option value="Wayanad">Wayanad</option> <option value="WestChamparan">West Champaran</option> <option value="WestDelhi">West Delhi</option> <option value="WestGaroHills">West Garo Hills</option> <option value="WestKameng">West Kameng</option> <option value="WestKhasiHills">West Khasi Hills</option> <option value="WestSiang">West Siang</option> <option value="WestSikkim">West Sikkim</option> <option value="WestSinghbhum">West Singhbhum</option> <option value="WestTripura">West Tripura</option> <option value="Wokha">Wokha</option> <option value="Yadgir">Yadgir</option> <option value="YamunaNagar">Yamuna Nagar</option> <option value="Yanam">Yanam</option> <option value="Yavatmal">Yavatmal</option> <option value="Zunheboto">Zunheboto</option>
                    </select>
                </label><br />

                <label className='input-box' htmlFor='pincode'>Pincode <br />
                    <input type='text' id='pincode' name='pincode' placeholder='Example: 220059' onChange={(e) => { handleFormData(e) }} class='input' value={"" || formData.pincode} />
                </label><br />

                <label className='input-box' htmlFor='address'>Address <br />
                    <input type='text' id='address' name='address' placeholder='Address' onChange={(e) => { handleFormData(e) }} className='input' value={"" || formData.address} />
                </label><br />

                <label className='input-box' htmlFor='landmark'>Landmark <br />
                    <input type='landmark' id='landmark' name='landmark' placeholder='Landmark' onChange={(e) => { handleFormData(e) }} className='input' value={"" || formData.landmark} />
                </label><br />

                <label className='input-box' htmlFor='latitude'>Latitude <br />
                    <input type='text' id='latitude' name='latitude' placeholder='Latitude' onChange={(e) => { handleFormData(e) }} className='input' value={"" || formData.latitude} />
                </label><br />

                <label className='input-box' htmlFor='longitude'>Longitude <br />
                    <input type='text' id='longitude' name='longitude' placeholder='Longitude' onChange={(e) => { handleFormData(e) }} className='input' value={"" || formData.longitude} />
                </label><br />
    <button className="btn1" onClick={handleSubmit}>Save the Changes</button>
    </div>
    </form>
  )
}

export default EditPage
 

            