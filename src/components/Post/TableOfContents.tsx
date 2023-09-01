import styled from '@emotion/styled'
import '@fontsource/noto-sans-kr'

type ContentProps = {
  content: string
}

const TocContainer = styled.aside`
  margin-top: 4vh;
  width: 250px;
  right: 3vw;
  float: right;
  height: 100%;
  font-family: 'Noto Sans KR', sans-serif;

  > ul {
    border-left: 3px solid rgba(30, 31, 33, 0.5);
    padding: 0.7vw 0 0.7vw 0.7vw;
    position: sticky;
    top: 10px;
    list-style: none;
  }

  > ul > li {
  }

  > ul > li > ul {
    list-style: none;
  }

  > ul > li > ul > li {
    padding-bottom: 0.5vw;
  }

  > ul > li > a {
    text-decoration: none;
  }
`

const TableOfContents = function ({ content }: ContentProps) {
  return (
    <TocContainer
      className="table-of-contents"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

export default TableOfContents
