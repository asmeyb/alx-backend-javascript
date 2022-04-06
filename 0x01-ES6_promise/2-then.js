export default function handleResponseFromAPI(promise) {
    promise.then(() => {
	if(success){
	    resolve({
	    status: 200,
	    body: 'success',
	    });
	    else {
      reject(Error('The fake API is not working currently'));
    }
	console.log('Got a response from the API');
  }, (err) => err);
}
