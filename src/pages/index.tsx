export async function getServerSideProps(context: any) {
  return {
    redirect: {
      permanent: false,
      destination: "/products",
    },
  };
}

const index = () => {
  return <div>index</div>;
};

export default index;
