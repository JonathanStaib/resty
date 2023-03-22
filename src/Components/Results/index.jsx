import React from 'react';

const Results = (props) => {
  const { data } = props;

    return (
      <>
      <section>
        {
          props.loading
          ?<p>Loading...</p>
          : <pre data-testid="results-json">{data ? JSON.stringify(data, undefined, 2) : null}</pre>
        }
      </section>

        {/* <pre>{data ? 
        <li>

          <ol>{data.results[0].name}</ol>
          <ol>{data.results[1].name}</ol>
          <ol>{data.results[2].name}</ol>
          <ol>{data.results[3].name}</ol>
          <ol>{data.results[4].name}</ol>
          <ol>{data.results[5].name}</ol>
          <ol>{data.results[6].name}</ol>
          <ol>{data.results[7].name}</ol>
          <ol>{data.results[8].name}</ol>
          <ol>{data.results[9].name}</ol> 
          <ol>{data.results[10].name}</ol> 
          <ol>{data.results[11].name}</ol> 
          <ol>{data.results[12].name}</ol> 
          <ol>{data.results[13].name}</ol> 
          <ol>{data.results[14].name}</ol> 
          <ol>{data.results[15].name}</ol> 
          <ol>{data.results[16].name}</ol> 
          <ol>{data.results[17].name}</ol> 
          <ol>{data.results[18].name}</ol> 
          <ol>{data.results[19].name}</ol> 

        </li>
        : null}</pre> */}
        
      
      </>
    );

        }

export default Results;
