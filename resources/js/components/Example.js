import React from 'react';
import ReactDOM from 'react-dom';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider, Page, Card, Button, MediaCard } from '@shopify/polaris';
import * as EF from '../functions/ExampleFunctions';

function Example() {
    
    return (
        <AppProvider i18n={enTranslations}>
            <Page fullWidth title="Example app">
                <Card sectioned>
                    <Button destructive onClick={() => EF.myAlertFunction()}>Example button</Button>
                </Card>
                <Card sectioned>
                    <h3>This is a H3 TAG</h3>
                    <ul>
                        <li>First Link</li>
                        <li>Second Link</li>
                        <li>Third Link</li>
                    </ul>
                </Card>
                <MediaCard
                    title="Getting Started"
                    primaryAction={{
                        content: 'Learn about getting started',
                        onAction: () => { EF.MediaCardButtonClick() },
                    }}
                    description="Discover how Shopify can power up your entrepreneurial journey."
                    popoverActions={[{ content: 'Dismiss', onAction: () => { } }]}
                >
                    <img
                        alt=""
                        width="100%"
                        height="100%"
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                        src="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
                    />
                </MediaCard>
            </Page>
        </AppProvider>
    );
}


export default Example;

ReactDOM.render(
    <Example />, document.querySelector('#app'),
);
if (document.getElementById('app')) {
   // ReactDOM.render(<Example />, document.getElementById('app'));
}
