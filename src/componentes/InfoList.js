import ItemInfo from './ItemInfo';

function InfoList({ items }) {
  if (!items || items.length === 0) {
    return <p>No hay información disponible.</p>;
  }

  return (
    <ul>
      {items.map(item => (
        <ItemInfo key={item.id} title={item.title} detail={item.detail} />
      ))}
    </ul>
  );
}

export default InfoList;