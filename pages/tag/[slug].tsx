import type { GetServerSideProps, NextPage } from 'next'

import TagByName from '@/screens/tag/TagByName'

import { ITagPopulated } from '@/shared/types/profile.types'

import { TagService } from '@/services/tag.service'

const TagPage: NextPage<{ tag: ITagPopulated }> = ({ tag }) => {
	return <TagByName tag={tag} />
}

export const getServerSideProps: GetServerSideProps = async context => {
	const { slug } = context.query
	const { data: tag } = await TagService.getByName(String(slug))
	return { props: { tag } }
}

export default TagPage
