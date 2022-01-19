const Navigation = ({routes}) => {
    return(
        <header className="app-header">
            {routes.map(r => {
                return(
                    <a href={r.path} className="app-link" key={r.page}>{r.page}</a>
                );
            })}
      </header>
    );
};

export default Navigation;