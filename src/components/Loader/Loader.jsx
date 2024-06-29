import { DNA } from 'react-loader-spinner';

export default function Loader() {
  return (
    <span>
      <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </span>
  );
}
