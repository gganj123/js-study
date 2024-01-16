export async function getServerSideProps(){
    const userRequest = await fetch('http://example.com/api/user');
    const userData = await userRequest.json();

    return {
        props: {
            user: userData,
        },
    };
}

function IndexPage() {
    return <div>This is th index page.</div>
}

export default IndexPage;