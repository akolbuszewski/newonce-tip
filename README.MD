## How to use

1. Install [now cli](https://zeit.co/download#now-cli) and login.

    ```bash
    npm i -g now
    ```

2. [Optional] Properly configure your custom domain according to [Aliasing a Deployment](https://zeit.co/docs/v2/domains-and-aliases/aliasing-a-deployment/). (Only if you need a custom domain.)
3. Run `npm i` and then `npm run deploy`.

See the following log for example:

<details>
<summary>Sample log of <code>Mirror</code></summary>

```txt
Making mirror google
Making mirror wiki
Making mirror mwiki
Folder wiki created
Folder wiki configured
Deploying wiki to now
now.sh: 
> Deploying D:\github\mirror\wiki under upupming
> Using project wiki
> Ready! Aliases assigned [2s]
- https://wiki.upupming.site
- https://wiki.upupming.now.sh

now.sh: 
https://wiki-k5m0g45nr.now.sh
Folder google created
Folder google configured
Deploying google to now
now.sh: 
> Deploying D:\github\mirror\google under upupming
> Using project google
> Ready! Aliases assigned [2s]
- https://google.upupming.site
- https://google.upupming.now.sh

now.sh: 
https://google-hnostj6ze.now.sh
Folder mwiki created
Folder mwiki configured
Deploying mwiki to now
now.sh: 
> Deploying D:\github\mirror\mwiki under upupming
> Using project mwiki
> Ready! Aliases assigned [2s]
- https://mwiki.upupming.site
- https://mwiki.upupming.now.sh

now.sh: 
https://mwiki-agtv54c4l.now.sh
D:\github\mirror\wiki cleaned up
D:\github\mirror\google cleaned up
D:\github\mirror\mwiki cleaned up
```

</details>
