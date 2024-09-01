import React, { useState } from 'react';
import './form.css';

const FormComponent = () => {
  const [inputText, setInputText] = useState('');
  const [responseText, setResponseText] = useState([]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/find_similar_cases', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_query: inputText }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Server responded with an error:', errorData);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      setResponseText(data.map(caseData => ({
        court_name: caseData.court_name || 'N/A',
        judge_name: caseData.desgname || 'N/A',
        current_status: caseData.disp_name || 'N/A',
        district_name: caseData.district_name || 'N/A',
        state_name: caseData.state_name || 'N/A',
        fir_no: caseData.fir_no || 'N/A',
        police_station: caseData.police_station || 'N/A',
        case_type: caseData.purpose_name || 'N/A',
        suspect_condition: caseData.type_name_reclassification_1 || 'N/A',
        outcome_classification_1: caseData.outcome_classification_1 || 'N/A',
        section: caseData.section || 'N/A',
        name_updated: caseData.name_updated || 'N/A',
        CaseType: caseData.CaseType || 'N/A'
      })));
    } catch (error) {
      console.error('Error:', error);
      setResponseText([{ error: `An error occurred while processing your request: ${error.message}` }]);
    }
  };

  return (
    <div className={`form-container ${responseText.length > 0 ? 'expanded' : 'collapsed'}`}>
      <h1>Juris AI</h1>
      <form id="text-form" onSubmit={handleSubmit}>
        <label htmlFor="text-input"></label>
        <textarea
          id="text-input"
          name="text-input"
          value={inputText}
          onChange={handleInputChange}
          placeholder='Enter your case details here...'
          required
        />
        <button type="submit" className="thq-button-filled hero-button1">Submit</button>
      </form>
      <div id="response-container" className={responseText.length > 0 ? 'expanded' : 'collapsed'}>
        {responseText.length > 0 && (
          <div className="cases-container">
            {responseText.map((caseData, index) => (
              <div key={index} className="case-details">
                {caseData.error ? (
                  <p>{caseData.error}</p>
                ) : (
                  <>
                    <h2>Case Details (Case No. {index + 1})</h2>
                    <div className="case-info">
                      <ul>
                        <li><strong>Court Name:</strong> {caseData.court_name}</li>
                        <li><strong>Judge Name:</strong> {caseData.judge_name}</li>
                        <li><strong>Current Status:</strong> {caseData.current_status}</li>
                        <li><strong>District Name:</strong> {caseData.district_name}</li>
                        <li><strong>State Name:</strong> {caseData.state_name}</li>
                        <li><strong>Fir No:</strong> {caseData.fir_no}</li>
                        <li><strong>Police Station:</strong> {caseData.police_station}</li>
                        <li><strong>Case Type:</strong> {caseData.case_type}</li>
                        <li><strong>Suspect Condition:</strong> {caseData.suspect_condition}</li>
                        <li><strong>Outcome Classification:</strong> {caseData.outcome_classification_1}</li>
                        <li><strong>Section No.:</strong> {caseData.section}</li>
                        <li><strong>Name Updated:</strong> {caseData.name_updated}</li>
                        <li><strong>Case Type:</strong> {caseData.CaseType}</li>
                      </ul>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormComponent;