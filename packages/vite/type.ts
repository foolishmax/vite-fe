/**
 *后台服务的环境类型(暂时仅有dev环境)
 * - dev: 后台开发环境
 * - test: 后台测试环境
 * - prod: 后台生产环境
 */
export type ServiceEnvType = "dev" | "test" | "prod";

export interface ServiceEnvConfig {
  /** 请求地址 */
  url: string;
  /** 匹配路径的正则字符串, 用于拦截地址转发代理(任意以 /开头 + 字符串, 单个/不起作用) */
  urlPattern: string;
  /** 另一个后端请求地址(有多个不同的后端服务时) */
  secondUrl?: string;
  /** 匹配路径的正则字符串, 用于拦截地址转发代理(任意以 /开头 + 字符串, 单个/不起作用) */
  secondUrlPattern?: string;
}

export interface ImportMetaEnv {
  /** 项目基本地址 */
  readonly VITE_BASE_URL: string;
  /** 项目名称 */
  readonly VITE_APP_NAME: string;
  /** 项目标题 */
  readonly VITE_APP_TITLE: string;
  /** 是否开启打包文件大小结果分析 */
  readonly VITE_VISUALIZER?: "Y" | "N";
  /** 是否开启打包压缩 */
  readonly VITE_COMPRESS?: "Y" | "N";
  /** 压缩算法类型 */
  readonly VITE_COMPRESS_TYPE?:
    | "gzip"
    | "brotliCompress"
    | "deflate"
    | "deflateRaw";
  /** 开启请求代理 */
  readonly VITE_HTTP_PROXY?: "Y" | "N";
  /** 后端服务的环境类型 */
  readonly VITE_SERVICE_ENV?: ServiceEnvType;
  /**
   * 本地SVG图标作为组件的前缀, 请注意一定要包含 VITE_ICON_PREFFIX
   * - 格式 {VITE_ICON_PREFFIX}-{本地图标集合名称}
   * - 例如：icon-local
   */
  readonly VITE_ICON_LOCAL_PREFFIX: string;
}
