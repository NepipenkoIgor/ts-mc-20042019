import React, { ChangeEvent } from 'react';
import './styles.css';

export interface IProps {
    search(term: string): void;
}


export class Header extends React.Component<IProps> {
    public onSearch(term: string): void {
        this.props.search(term);
    }

    public render(): JSX.Element {
        return <div className='row header'>
            Search: <input type='text'
                           onChange={(e: ChangeEvent<HTMLInputElement>) => this.onSearch.call(this, e.target.value)}/>
        </div>;
    }
}
