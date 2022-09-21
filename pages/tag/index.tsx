import type { GetServerSideProps, NextPage } from 'next'

import Tag from '@/screens/tag/Tag'

import { ITag } from '@/shared/types/profile.types'

import { TagService } from '@/services/tag.service'

const TagPage: NextPage<{ tags: ITag[] }> = ({ tags }) => {
	return <Tag tags={tags} />
}

export const getServerSideProps: GetServerSideProps = async () => {
	const { data: tags } = await TagService.getAll()
	return { props: { tags } }
}

export default TagPage
