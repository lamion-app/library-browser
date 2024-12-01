
export interface BrowserProps {
  accessKey: string;
  autoFlush?: boolean;
  clientId?: () => Promise<string | undefined>;
}
