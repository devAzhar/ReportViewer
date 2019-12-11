const showCreditReport = (divId: string, reportBody: any, options: any) => {
    const windowObject: any = window;

    const ReportViewer = () => {
        return new Promise((resolve, reject) => {
            const $jq = windowObject.jQuery;

            if(!$jq) {
                reject(`jQuery is not available...`);
                return;
            }
            const $div = $jq(divId);

            if(!$div || $div.length === 0) {
                reject(`Element not found ${divId}...`);
                return;
            }

            let includeBootstrap: boolean = options && options.includeBootstrap;
            const containerClass = $div.data('container-class');

            containerClass && $div.addClass(containerClass);

            if(!includeBootstrap) {
                includeBootstrap = $div.data('include-bootstrap');
            }

            console.log(includeBootstrap);

            loadCSS(includeBootstrap && 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css')
            .then(script => loadJavaScript(includeBootstrap && 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js'))
            .catch(error => {});
        
            let $html = `
                <div class='row'>
                    <div class='col-md-12'>
                        Loading report viewer...
                    </div>
                </div>
            `;
            $div.html($html);
            console.log($div);
            console.log(reportBody);
            console.log(options);
            console.log(includeBootstrap);

            resolve({'success': true});
        });
    };

    const loadCSS = (src: string, parentTagName?: string) => {
        if(!parentTagName) {
            parentTagName = "head";
        }

        const parentTagObject: any = document.getElementsByTagName(parentTagName);

        return new Promise((resolve, reject) => {
            if(!src) {
                resolve();
                return;
            }

            console.log(`Loading CSS ${src}`);

            if(!parentTagObject) {
                reject(`Parent tag not found.`);
                return;
            }

            try {
                const head: any = parentTagObject[0];
                const link: any = document.createElement('link');
                link.rel  = 'stylesheet';
                link.type = 'text/css';
                link.href = src;
                link.media = 'all';
                head.appendChild(link);
                
                resolve(src);
            } catch(e) {
                reject(e);
            }
        });
    };

    const loadJavaScript = (src: string, parentTagName?: string) => {
        if(!parentTagName) {
            parentTagName = "head";
        }

        const parentTagObject: any = document.getElementsByTagName(parentTagName);

        return new Promise((resolve, reject) => {
            if(!src) {
                resolve();
                return;
            }
            console.log(`Loading Java-script ${src}`);

            if(!parentTagObject) {
                reject(`Parent tag not found.`);
                return;
            }

            try {
                const script: any = document.createElement("SCRIPT");
                script.src = src;
                script.type = 'text/javascript';

                script.onload = function() {
                    resolve(script);
                };
                
                parentTagObject[0].appendChild(script);
            } catch(e) {
                reject(e);
            }
        });
    };
    
    const $jq = windowObject.jQuery;

    loadJavaScript(!$jq && 'https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js')
    .then(script => {
        
        if(!$jq) {
            const $ = windowObject.jQuery;
        }

        ReportViewer().catch(errorr => {console.error(errorr)});
    })
    .catch(error => {
        console.error(error);
    });
};