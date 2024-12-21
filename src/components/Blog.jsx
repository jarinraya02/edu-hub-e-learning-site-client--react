import React from 'react';

const Blog = () => {
    return (
        <div className='mx-32 mb-10 mt-5'>
            <h1><strong>What is cors?</strong></h1>
            <p>The word CORS stands for “Cross-Origin Resource Sharing”. Cross-Origin Resource Sharing is an HTTP-header based mechanism implemented by the browser which allows a server or an API(Application Programming Interface) to indicate any origins (different in terms of protocol, hostname, or port) other than its origin from which the unknown origin gets permission to access and load resources. The cors package available in the npm registry is used to tackle CORS errors in a Node.js application. </p>

            <br />

            <h1><strong>Why are you using firebase? What other options do you have to implement authentication?</strong></h1>
            <p> Here are some key points: <br />
                - Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. <br />
                - It reduces development workload and time. <br />
                - And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.</p>
                <br />
            <p>Here are some Competitors and Alternatives to Firebase Realtime Database
                <br />
                <ul>
                    <li>MongoDB.</li>
                    <li>Oracle Database.</li>
                    <li>Amazon Redshift.</li>
                    <li>DataStax Enterprise.</li>
                    <li>Redis Enterprise Cloud.</li>
                    <li>Cloudera Enterprise Data Hub.</li>
                    <li>Db2.</li>
                    <li>Couchbase Server.</li>
                </ul>
            </p>
            <br />

            <h1><strong>How does the private route work?</strong></h1>
            <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>

            <br />

            <h1><strong>What is Node? How does Node work?</strong></h1>
            <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
            <br />
            <p><strong>Working of Node.js: </strong>Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
        </div>
    );
};

export default Blog;